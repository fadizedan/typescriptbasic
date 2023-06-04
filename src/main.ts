
let a: number;

a = 200;

let b: number | string | Date;
b = 200;
b = "true";
b = new Date();

let c: any;
c=true;
c = "hello";
c = 145;

let f;
f = "hello";
f = 250;

function func( age: number, name: string){
    console.log(name + "is " + age + "years old");

}

func(34, "Erez");

function func3(){
    console.log("Hello");
}