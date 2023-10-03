const findTheOldest = function (people) {
    return people.reduce((a, b) => {
        if (!a.yearOfDeath) {
            let currentDate = new Date()
            a.yearOfDeath = currentDate.getFullYear()
        }

        if (!b.yearOfDeath) {
            let currentDate = new Date()
            b.yearOfDeath = currentDate.getFullYear()
        }

        let age1 = a.yearOfDeath - a.yearOfBirth
        let age2 = b.yearOfDeath - b.yearOfBirth

        if (age1 > age2)
            return {
                name: a.name,
                yearOfBirth: a.yearOfBirth,
                yearOfDeath: a.yearOfDeath,
            }
        else
            return {
                name: b.name,
                yearOfBirth: b.yearOfBirth,
                yearOfDeath: b.yearOfDeath,
            }
    })
}
// findTheOldest([
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
// ])
// Do not edit below this line
module.exports = findTheOldest
