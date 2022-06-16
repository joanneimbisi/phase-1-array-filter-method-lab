const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    return drivers.filter(person => person.toLowerCase() === string.toLowerCase()
  
    );
    
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(word => word.startsWith(string))

}
function matchName(drivers,string){
    return drivers.filter(element => element.name===string)
}