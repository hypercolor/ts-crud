import { Handler } from "../handler";
import { IPostgresModelClass, IUser, PostgresModel } from "ts-postgres-model";
import { Transaction } from "knex";


export interface IPivotConfig<T extends PostgresModel<T>> {
  foreignArrayPropertyName: string
  pivotModel: IPostgresModelClass<T>
  pivotKeyLocalItemId: string
  pivotKeyForeignItemId: string

}

export interface IPivotObject {
  id: number
}


//
//    Item    <->     Pivot       <->       Foreign
//    * id            * id                  * id
//    * "foreigns"    * item id
//                    * foreign id

export class UpdatePivotTables<T extends PostgresModel<T>> extends Handler {


  constructor(private user: IUser, private objectJson: any, private localObjectId: any, private pivotConfig: IPivotConfig<T>, private transaction?: Transaction){
    super();
  }

  run() {
    // console.log('updating pivot table for ' + pivotConfig.foreignArrayPropertyName);

    const desiredForeignObjects: Array<IPivotObject> = this.objectJson[this.pivotConfig.foreignArrayPropertyName];

    // console.log('User desires ' + desiredForeignObjects.length + ' pivot entries');

    if (!desiredForeignObjects) {
      return Promise.resolve();
    } else if (desiredForeignObjects.constructor !== Array) {
      return Promise.reject({code: 500, error: 'Cant update non-array pivot table property: ' + this.pivotConfig.foreignArrayPropertyName + ' - found ' + desiredForeignObjects.constructor.name});
    } else {


      // 1.  Fetch all objects currently in pivot table

      const pivotQuery: any = {};
      pivotQuery[this.pivotConfig.pivotKeyLocalItemId] = this.localObjectId;

      return new this.pivotConfig.pivotModel().where(pivotQuery).fetchAllForUser(this.user)
      .then(currentPivotEntries => {

        const foreignObjectsToAdd: Array<IPivotObject> = [];
        const pivotEntriesToRemove: Array<PostgresModel<T>> = [];


        // 2.  Create new pivot table objects for ones not found

        desiredForeignObjects.forEach(desiredForeignObject => {
          let found = false;
          currentPivotEntries.forEach(pivotEntry => {
            if (pivotEntry.id === desiredForeignObject.id) {
              found = true;
            }
          });
          if (!found) {
            foreignObjectsToAdd.push(desiredForeignObject);
          }
        });


        // 3.  Delete pivot table objects for ones not found

        currentPivotEntries.forEach(pivotEntry => {
          let found = false;
          desiredForeignObjects.forEach(desiredPivotEntry => {
            if (pivotEntry.id === desiredPivotEntry.id) {
              found = true;
            }
          });
          if (!found) {
            pivotEntriesToRemove.push(pivotEntry);
          }
        });

        // console.log('We need to add ' + foreignObjectsToAdd.length + ' entries and remove ' + pivotEntriesToRemove.length + ' entries.');

        return Promise.all([
          createPivotEntries(this.user, this.localObjectId, this.pivotConfig, foreignObjectsToAdd, this.transaction),
          removePivotEntries(this.user, this.pivotConfig, pivotEntriesToRemove, this.transaction)
        ]);

      })

      .then(() => {
        return Promise.resolve();
      });


    }
  }
}





function createPivotEntries<T extends PostgresModel<T>>(user: IUser, localObjectId: number, pivotConfig: IPivotConfig<T>, foreignObjectsToAdd: Array<IPivotObject>, transaction?: Transaction): Promise<Array<any>> {

  return Promise.all(foreignObjectsToAdd.map(foreignObjectToAdd => {

    // console.log('creating new pivot entry for foreign object: ' + JSON.stringify(foreignObjectToAdd));

    const pivotEntry = new pivotConfig.pivotModel();
    (pivotEntry as any)[pivotConfig.pivotKeyForeignItemId] = foreignObjectToAdd.id;
    (pivotEntry as any)[pivotConfig.pivotKeyLocalItemId] = localObjectId;

    // console.log('Created ' + JSON.stringify(pivotEntry));

    if (transaction) {
      return pivotEntry.saveForUser(user, {transacting: transaction});
    } else {
      return pivotEntry.saveForUser(user);
    }
  }));
}

function removePivotEntries<T extends PostgresModel<T>>(user: IUser, pivotConfig: IPivotConfig<T>, pivotEntriesToRemove: Array<PostgresModel<T>>, transaction?: Transaction): Promise<Array<any>> {

  return Promise.all(pivotEntriesToRemove.map(pivotEntry => {
    if (transaction) {
      return pivotEntry.destroyForUser(user, {transacting: transaction});
    } else {
      return pivotEntry.destroyForUser(user);
    }
  }));
}
