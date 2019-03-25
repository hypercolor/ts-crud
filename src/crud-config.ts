import { Controller } from 'ts-express-controller'

export interface IControllerFrameworkConfig {
  instrumentAllErrors: boolean
  instrument500Errors: boolean
  instrumentErrorRequestBodies: boolean
  instrumentErrorRequestBodiesRouteBlacklist: Array<string>
  environmentDescriptor: string
  packageConfig: {
    packageName: string
    packageDescription: string
    packageVersion: string
  }
}

export class CrudConfig {
  public static setControllerConfig(config: IControllerFrameworkConfig) {
    Controller.configure(config)
  }
}
