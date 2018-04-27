

import * as PQueue from 'p-queue';

export class PromiseQueue {

  private queue: PQueue;

  constructor(maxConcurrent: number){
    this.queue = new PQueue({concurrency: maxConcurrent});
  }

  public add(promiseFunction: () => Promise<any>): Promise<any> {
    return this.queue.add(promiseFunction);
  }

  public runAllPromiseFunctions(promiseFunctions: Array<() => Promise<any>>): Promise<any> {
    if (!promiseFunctions) {
      return Promise.reject('promiseFunctions was not supplied');
    } else if (promiseFunctions.length === 0) {
      return Promise.resolve();
    } else {
      const addedPromises: Array<Promise<any>> = [];
      promiseFunctions.forEach(promiseFunction => {
        // console.log("Adding promiseFunction to queue...");
        addedPromises.push(this.add(promiseFunction));
      });

      return new Promise((resolve, reject) => {
        Promise.all(addedPromises)
        .then(results => {
          // console.log("All promises resolved.");
          resolve(results);
        })
        .catch(err => {
          // console.log("Queue promise failed...");
          reject(err);
        });
      });

      // return Q.all(addedPromises);
    }
  }

}

