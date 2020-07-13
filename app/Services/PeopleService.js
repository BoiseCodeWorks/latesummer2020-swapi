import _store from "../store.js";
import Person from "../Models/Person.js";

// @ts-ignore
const _api = axios.create({
    baseURL: "https://swapi.dev/api", //default route
    timeout: 3000
})

class PeopleService {
    constructor() {
    }

    getPeople() {
        _api.get("people").then(res => {
            console.log(res.data.results);
            let people = res.data.results.map(rawPersonData => new Person(rawPersonData))
            _store.commit("people", people)
        }).catch(err => console.error(err))
    }

    getLuke() {
        _api.get("people/1")
    }
}

const service = new PeopleService();
export default service;
