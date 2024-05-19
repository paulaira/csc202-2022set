/*var logger = function (output) {
    console.log(output)
};*/

const logger = (output) => {
    console.log(output)
}

export const appName = "ES6 Review";
/*export var dummyFunction = function () {
    return "I am a dummy function";
}*/
export const dummyFunction = () => {
    let feedback = "I am a dummy function";
    feedback = "I am still a dummy function";
    return feedback;
}

export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}`
}
export const genericFunction2 = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++'] 
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`
}
export const genericFunction3 = () => { //declare an object literal
    const personalInformation = {
        firstName: 'Pius',
        lastName: 'Onobhayedo',
        gender: 'Male',
        religion: 'Christianity (Catholic)', 
        fathersName: 'John', 
        mothersName: 'Patricia'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo 
    const {firstName, lastName, ...otherPersonalInfo} = personalInformation;
    return `The first name is ${firstName} and the lastName is ${lastName}. 
    Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
}

export const multiplier = (a, b) => {
    return (a * b);
}

export const multiplier2 = (...numbers) => { 
    let product = 1;
    if (numbers.length < 2) {
    throw new Error("Illegal arguments counts. Arguments must be greater than 1") 
    }
    //loop through using the old forEach approach which still works //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of 
    for(let number of numbers){
    product = product * number; 
    }
    return product; 
}

export class Person {
    constructor(firstName, lastName, gender, height){
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.gender = gender; 
    this.height = height;
    } 
};
    

export default logger;