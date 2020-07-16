import _store from "../store.js";
import Person from "../Models/Person.js";
import store from "../store.js";

// @ts-ignore
const _api = axios.create({
    baseURL: "https://swapi.dev/api", //default route
    timeout: 3000
})

class PeopleService {

    constructor() {
        store.subscribe("page", this.getPeople)
    }

    nextPage() {
        let page = store.State.page
        page++
        store.commit("page", page++)
    }

    previousPage() {
        let page = store.State.page
        page--
        if (page < 1) {
            page = 1
        }
        store.commit("page", page)
    }

    getPeople() {
        // NOTE query params https://swapi.dev/api/people?page=2&hair_color=blonde
        // /people is the end of the route we want to hit for the resource we are requesting
        // ?page=2 this is the first query param that designates the page number
        // &hair_color=blonde this would also pass a filter param for finding the blonde characters
        // _api.get("people/?page=" + store.State.page + "&format=wookiee").then(res => {
        _api.get("people/?page=" + store.State.page).then(res => {
            console.log(res.data);
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
