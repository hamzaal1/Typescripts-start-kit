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

type Dreams = {
    title: string
}

// Inerfaces extend from a type or other interface work like classes
// Gennircs
interface Employer<Type> extends Person {
    department: string;
    EmpCode: number;
    dream: Type[];
}

let employer1: Employer<Dreams> = {
    id: "221",
    name: "",
    department: "",
    EmpCode: 21,
    dream: [{ title: "travel the world" }]
}
console.log(employer1);




