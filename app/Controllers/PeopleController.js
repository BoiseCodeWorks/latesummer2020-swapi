import _peopleService from "../Services/PeopleService.js";
import store from "../store.js";

//Private
function _draw() {
  let people = store.State.people;
  let template = ""
  people.forEach(person => template += person.Template)
  template +=/*html*/ `
  <div class="col-12">
    <div class="row">
      <button class="btn btn-primary col-6" ${store.State.page < 2 ? "disabled" : ""} onclick="app.peopleController.previousPage()">Previous Page</button>
      <button class="btn btn-primary col-6" ${store.State.people.length < 10 ? "disabled" : ""} onclick="app.peopleController.nextPage()">Next Page</button>
    </div>
  </div>
  `
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

  previousPage() {
    _peopleService.previousPage()
  }

  nextPage() {
    _peopleService.nextPage()
  }

}
