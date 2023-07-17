class ServerDownError {

    public HttpMethod: MoleculesHttpMethod  = MoleculesHttpMethod.GET;

    public Resource: string                 = "";


    public constructor(public httpMethod: MoleculesHttpMethod,
                        public resource: string) {
        this.HttpMethod = httpMethod;
        this.Resource = resource;
    }


}