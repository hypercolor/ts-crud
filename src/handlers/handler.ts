export abstract class Handler {
  abstract run(): Promise<any>;
}
