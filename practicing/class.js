let person = {
    first_name: "Bob",
    last_name: "Smith",
    age: 32,

    full_name: function()
    {
        return this.first_name + " " + this.last_name;
    },

    change_name: function(new_name)
    {
        this.first_name = new_name;
    }
}

console.log(person.full_name());
person.change_name("Amanda");
console.log(person.full_name());