//Object literal

let client = {
    Name: "John",
    Fname: "Smith",
    Phone: 91223345676,

    full_name: function(){
        return this.Name + " " + this.Fname;
    },

    change_name: function(new_name){
        this.Name = new_name;
    }
};

console.log(client.Name);
console.log(client.full_name());
client.change_name("Stan");
console.log(client.full_name());

client.hobby = "gambling";
console.log(client.hobby);

console.log("Phone" in client);
console.log(client.Phone);
delete client.Phone
console.log(client.Phone);

console.log("Phone" in client);

for (key in client){
    console.log(key);
}
for (key in client){
    console.log(key + " - " + client[key]);
}

let client2 = {};

for (key in client2){
    console.log(key + " - " + client2[key]);
}

Object.assign(client2, client);

for (key in client2){
    console.log(key + " - " + client2[key]);
}