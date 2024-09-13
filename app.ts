// var a="kashish";

// primtive types(number,string,boolean)
let x=12.344445;
x=5;
console.log(x);
let y=false;

// arrays
let arr=[1,2,3,"kashish"];

// tuples
let arr1:[number,string]=[12,"kashish"];

// enum
enum userRules{
    ADMIN="admin",
    MODERATOR="moderator",
    USER="user"
}

// any,unknown,null,undefined,never
// let a;  //by default type is set to any

let a:unknown;
a=12;
a="kashish";

if(typeof a=="string"){
    a.toUpperCase();
}

function abcd () :void{
    console.log("kashish");
    // it is not returning anything
}

let b:null;
let z:undefined;

function abc() :never {
    while (true) {
        console.log("kashish");
    }
}
abc();
console.log("tussi great ho");
