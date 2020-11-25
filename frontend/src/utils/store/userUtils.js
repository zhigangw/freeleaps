import {store} from "../../plugins/index" ;

class UserUtils{
    constructor(store){
        this.store = store;
    }

    getJwtToken(){
        return this.store.getters["userAuth/userAuthToken"];
    }
}

const userUtils = new UserUtils(store);

export {userUtils};