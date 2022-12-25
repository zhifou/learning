import { action, makeAutoObservable } from "mobx";

class Store {
    count = 0;

    constructor() {
        makeAutoObservable(this, {
            increase: action,
        });
    }

    increase() {
        this.count++;
    }
}

export default Store;
