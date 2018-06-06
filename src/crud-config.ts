import { ControllerConfig } from "ts-express-controller";

export class CrudConfig {
  public static setControllerConfig(name: string, description: string, version: string){
    ControllerConfig.packageConfig.packageName = name;
    ControllerConfig.packageConfig.packageDescription = description;
    ControllerConfig.packageConfig.packageVersion = version;
  }

}
