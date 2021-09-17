import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /members": "src/list.main",
        "GET /members/{id}": "src/get.main",
        "PUT /members/{id}": "src/update.main",
      },
    });

    // Show the API endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
