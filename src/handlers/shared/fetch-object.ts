import { Handler } from '../handler'
import { IPostgresModelClass, PostgresModel } from 'ts-postgres-model'

export class FetchObject<T extends PostgresModel<T>> extends Handler {
  constructor(
    private model: IPostgresModelClass<T>,
    private objectId: number,
    private allowQueryPopulation: boolean,
    private fetchParams?: any,
    private populationString?: string
  ) {
    super()

    this.fetchParams = fetchParams || {}

    if (!this.fetchParams.withRelated) {
      this.fetchParams.withRelated = []
    }
  }

  run() {
    if (this.allowQueryPopulation && this.populationString) {
      return validateFetchOptions(this.model, this.populationString).then((fetchOptions: Array<string>) => {
        fetchOptions.forEach(option => {
          this.fetchParams.withRelated.push(option)
        })
        return this.doQuery()
      })
    } else {
      return this.doQuery()
    }
  }

  private doQuery() {
    return Promise.resolve().then(() => {
      return new this.model().where({ id: this.objectId }).fetch(this.fetchParams)
    })
  }
}

/**
 * Validate the fetch parameters specified in population-enabled routes.
 *
 * @param model
 * @param fetchOptionsString
 * @returns {*}
 */
function validateFetchOptions<T extends PostgresModel<T>>(
  model: IPostgresModelClass<T>,
  fetchOptionsString: string
): Promise<Array<string>> {
  // console.log("Validating fetch options for " + model.model.MODEL_NAME + ": " + fetchOptionsString);

  if (!fetchOptionsString) {
    return Promise.resolve([])
  } else {
    return parseFetchOptions(fetchOptionsString).then(fetchOptions => {
      if (typeof fetchOptions === 'string') {
        if (!isValidRelationship(model, fetchOptions)) {
          return Promise.reject({
            code: 400,
            error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOptions,
          })
        } else {
          return Promise.resolve([fetchOptions])
        }
      } else {
        return Promise.all(
          fetchOptions.map(fetchOption => {
            if (!isValidRelationship(model, fetchOption)) {
              return Promise.reject({
                code: 400,
                error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOption,
              })
            } else {
              return Promise.resolve()
            }
          })
        ).then(() => {
          return Promise.resolve(fetchOptions)
        })
      }
    })
  }

  function isValidRelationship(testModel: IPostgresModelClass<T>, testRelationship: string) {
    if (!testModel.relationships) {
      return false
    } else {
      let isValid = false
      Object.values(testModel.relationships).forEach(relationship => {
        if (relationship === testRelationship) {
          isValid = true
        }
      })
      return isValid
    }
  }
}

/**
 * Convert a fetch options string from the URL into a JSON object.
 *
 * @param fetchOptionsString
 * @returns {*}
 */
function parseFetchOptions(fetchOptionsString: string): Promise<string | Array<string>> {
  return new Promise((resolve, reject) => {
    try {
      const options = JSON.parse(fetchOptionsString)
      if (options.constructor !== String && options.constructor !== Array) {
        reject('Invalid JSON type for fetch options: ' + options.constructor.name)
      } else {
        resolve(options)
      }
    } catch (err) {
      reject('Invalid JSON for fetch options: ' + fetchOptionsString + ' - ' + err.message)
    }
  })
}
