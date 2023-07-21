import { IMoleculesError } from "../contract/error";
import { MoleculesHttpMethod } from "./molecules-http-method";

export class ServerError {

    public DisplayMessage: string = "";
    
    public constructor(public httpMethod: MoleculesHttpMethod,
                        public resource: string,
                            private error: IMoleculesError) {
        this.DisplayMessage = error.DisplayMessage;
    }

}