//object constructor
function Person(nm, fn, tlf)
{
    this.Name = nm;
    this.Fname = fn;
    this.Phone = tlf;

    this.full_name = function()
    {
        return this.Name + " " + this.Fname;
    }

    this.change_name = function(new_name)
    {
        this.Name = new_name;
    }
}

let client = new Person("John", "Smith", 91223345676);

console.log(client.Name, client.Fname);
console.log(client.full_name());

client.change_name("Lukas");
console.log(client.full_name());

let client2 = new Person("Anna", "Montana", 964759070);

console.log(client2.full_name());


class CLASSTESTE{

    stat = 0;

    constructor(){
        this.variavel1 = 1;
        this.variavel2 = 2;
        this.etc = etc;
        this.start_game()
    }
    start_game()
    {
        this.newvar = 10
        this.variavel1 = 2;
        this.variavel2 = 100;
    }
}

let teste = new CLASSTESTE;

teste.start_game()
teste.stat 