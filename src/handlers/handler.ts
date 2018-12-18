export abstract class Handler {
  abstract run(): PromiseLike<any>
}
