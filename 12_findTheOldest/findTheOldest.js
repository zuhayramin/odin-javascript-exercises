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

module.exports = findTheOldest
