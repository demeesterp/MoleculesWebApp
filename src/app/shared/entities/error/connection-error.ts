import { MoleculesHttpMethod } from "../molecules-http-method";

export class ConnectionError {

    public errorMessage:string = "Connection with the server is lost"

    public constructor(public httpMethod: MoleculesHttpMethod,
                            public resource: string) { }


}