// Interfaces and type allasis

interface user{
    name:string
    age:number
    gender ?:string // for option
}
function getDataOfUser(obj:user) {

}
getDataOfUser({ name: "Kashish", age: 25 });