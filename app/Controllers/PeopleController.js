import _peopleService from "../Services/PeopleService.js";
import store from "../store.js";

//Private
function _draw() {
  let people = store.State.people;
  let template = ""
  people.forEach(person => template += person.Template)
  document.getElementById("people").innerHTML = template
  console.log("draw ran");
}

function _greetPeople() {
  store.State.people.forEach(person => console.log("hello ", person.name))
}

//Public
export default class PeopleController {
  constructor() {
    store.subscribe("people", _draw);
    store.subscribe("people", _greetPeople);
    _peopleService.getPeople()
  }
}
