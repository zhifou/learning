import { makeAutoObservable, observable, action } from "mobx"

class AppStore {
    id = Math.random()
    title = "I am title."
    finished = false

    constructor() {
        // makeObservable(this, {
        //     title: observable,
        //     finished: observable,
        //     toggle: action,
        //     setTitle: action,
        // })
        makeAutoObservable(this)
    }

    toggle() {
        this.finished = !this.finished
    }

    setTitle(title) {
        this.title = title;
    }
}

export default new AppStore();