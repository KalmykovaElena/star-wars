class ServicesApi {

//     getResource(){
//         fetch('https://swapi.dev/api/planets')
//             .then(data=>{
//                 return data.json()
//             })
//             .then((data=>console.log(data)))
//     }
// }
    async getResource(url) {
        const response = await fetch(`https://swapi.dev/api${url}`)
        if (!response.ok) {
            throw new Error(`No connection: Status response ${response.status}`)
        }
        return await response.json()
    }

    async getAllPlanets() {
        const response = await this.getResource('/planets/')
        return await response.results
    }

    async getPlanet(id) {
        const response = await this.getResource(`/planets/${id}`)
        return this._transformPlanetData(response)
    }
    async getAllPeople() {
        const response = await this.getResource('/people/')
        return await response.results.map(this._transformPersonData)
    }
    async getPeople(id) {
        const response = await this.getResource(`/people/${id}`)
        return await response
    }
    _extractId(url){
        const regExp = /\/([0-9]*)\/$/
        return url.match(regExp)[1]
    }
_transformPlanetData(response){
        return{
            id:this._extractId(response.url),
            name:response.name,
            population:response.population,
           diameter:response.diameter,
            rotation_period:response.rotation_period
        }
}
    _transformPersonData=(person)=>{
        return{
            id:this._extractId(person.url),
            name:person.name,
            birthYear:person.birth_year,
            eyeColor:person.eye_color,
            gender:person.gender

        }
    }
}



export default ServicesApi