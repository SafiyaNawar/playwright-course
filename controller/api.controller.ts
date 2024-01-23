import { APIRequestContext, request } from "@playwright/test";

class APIController{
    private fakerApi: APIRequestContext;
    // initializing a new context
    async init() {
        this.fakerApi = await request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

}

async getUsers(){
    const response = await this.fakerApi.get('users');
    const responseBody = await response.json();
    return responseBody[0];
}

async createUserTodo(){
    const response = await this.fakerApi
    .post('/users/1/todos', {
    data: { //our data
      "title": "Learn PW",
      "completed": "false"
    }
});

return await response.json();

}
}

export default new APIController();