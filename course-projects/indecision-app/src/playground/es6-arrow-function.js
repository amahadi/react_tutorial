const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstNameShort = (fullName) => fullName.split(' ')[0]

const fullName = "Alvi Mahadi"

console.log(getFirstName(fullName))
console.log(getFirstNameShort(fullName))