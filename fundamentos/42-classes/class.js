class Person {
    first_name
    last_name
    age

    presentation(){
        return "Hello, my name is " + this.first_name + " " + this.last_name + ", age " + this.age;
    }
}

let me = new Person();
let you = new Person()
me.first_name = "Bob";
me.last_name = "Smith";
me.age = 35;

console.log(me.presentation());

you.first_name = "Hanna";
you.last_name = "Montana";
you.age = 28;

console.log(you.presentation());

console.table(me);
console.table(you);