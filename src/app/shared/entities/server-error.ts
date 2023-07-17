class ServerError {

    public DisplayMassage   : string                = "";

    public HttpMethod       : MoleculesHttpMethod   = MoleculesHttpMethod.GET;

    public Resource         : string                = "";

    public constructor(public httpMethod: MoleculesHttpMethod,
                        public resource: string,
                            public error: IMoleculesError) {
        this.DisplayMassage = error.DisplayMessage;
        this.HttpMethod = httpMethod;
        this.Resource = resource;
    }

}