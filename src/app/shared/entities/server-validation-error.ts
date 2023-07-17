class ServerValidationError {
  
    public HttpMethod: MoleculesHttpMethod  = MoleculesHttpMethod.GET;

    public Resource: string                 = "";

    public Errors: IMoleculeValidationError[];

    public constructor(resource: string, 
                            httpMethod: MoleculesHttpMethod,
                                validationErrors: IMoleculeValidationErrors) {
        this.Errors = validationErrors.ValidationErrors??[];
        this.HttpMethod = httpMethod;
        this.Resource = resource;
    }

    public get DisplayMessage(): string {
        if ( this.HasErrors ) {
            return this.Errors.map( (error) => error.Message ).join("\n");
        } else {
            return "";
        }
    }

    public get HasErrors(): boolean {   
        return this.Errors.length > 0;
    }


}