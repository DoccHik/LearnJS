let carName = 'Ford';
let carYear = 2010;
let personYear = 2015;



function calculateAge(year) {
    let currentYear = 2020;
    let result = currentYear - year;
    return result
}

function checkAngLogAge(year, name, compareTo) {
    if (calculateAge(year) < compareTo) {
        console.log(name + " меньше " + compareTo + " лет")
    } else {
        console.log(name + " больше " + compareTo + " лет")
    }
}


checkAngLogAge(carYear, 'Машине', 10);
checkAngLogAge(personYear, 'Человеку', 5);