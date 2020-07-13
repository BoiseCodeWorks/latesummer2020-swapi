export default class Person {
    constructor(data) {
        this.name = data.name
        this.height = data.height
        //if birthYear doesnt exist(not local data) then we are using the api info and it is formatted as birth_year
        this.birthYear = data.birthYear || data.birth_year
        this.gender = data.gender
        this.mass = data.mass
        this.hair_color = data.hair_color
    }

    get Template() {
        return `
        <div class="col-3 border rounded shadow-lg">
            <h3>${this.name}</h3>
            <h5>${this.height}</h5>
            <h5>${this.birthYear}</h5>
            <h5>${this.gender}</h5>
            <h5>${this.mass}</h5>
            <h5>${this.hair_color}</h5>
        </div>`
    }
}