class person {
	constructor(fname, lname, ag)
	{
		this.firstName = fname
		this.lastName = lname
		this.age = ag
	}

	presentation()
	{
		console.log("Hello, my name is " + this.firstName + " " + this.lastName + " age " + this.age);
	}
}

let ruben = new person("Ruben", "Smith", 25)
ruben.presentation()

let newHeader = document.getElementById("header").innerHTML = "This is <u>" + ruben.firstName + "</u>"