let hello: string | number = "number or String";
let exist: boolean;
// exist = 1; cause an error

let hobbies = ["coding", "coocking", "swiming"];
// hobbies.push([2]); cause error can't have array of multi types

let skilles: any;
skilles = [2, 1, "saw"];
skilles = "hi"

// define an array with multi value types

let multi: number[] = [];
multi.push(1);
// multi.push("test") //cause error
// to fix the error you can do 
let multiType: (string | number)[] = [];
multiType.push(1);
multiType.push("test")


type Person = {
    id: string;
    name: string;
    phone?: number;
}

const SayHey = (user: Person): void => {
    console.log("hello ", user.name);
}



SayHey({
    id: "0987654321",
    name: 'John'
});


// Inerfaces extend from a type or other interface work like classes
interface Employer extends Person {
    department: string;
    EmpCode: number;
}

let employer1: Employer = {
    id: "221",
    name: "",
    department: "",
    EmpCode: 21
}
console.log(employer1);

