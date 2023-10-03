const findTheOldest = function (people) {
    return people.reduce((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear()
        }

        if (!b.yearOfDeath) {
            let currentDate = new Date()
            b.yearOfDeath = currentDate.getFullYear()
        }

        let age1 = a.yearOfDeath - a.yearOfBirth
        let age2 = b.yearOfDeath - b.yearOfBirth

        return age1 > age2 ? a : b
    })
}

module.exports = findTheOldest
