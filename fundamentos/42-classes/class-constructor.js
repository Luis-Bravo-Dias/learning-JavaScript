class Person {
    //first_name
    //last_name
    #age //now this is a private variable

    constructor(fname, lname, ag){
        this.first_name = fname;
        this.last_name = lname;
        this.age = ag;
    }

    presentation(){
        return "Hello, my name is " + this.first_name + " " + this.last_name + ", age " + this.age;
    }
}

let me = new Person("Bob", "Smith", 36);

console.log(me.presentation());