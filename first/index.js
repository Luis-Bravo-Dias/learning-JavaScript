
let name = 'Sukuna';
console.log(name);

let vessel = {
    name: 'Yuuji',
    age: 16
};

console.log(vessel);

vessel.name = 'Megumi';

console.log(vessel);

vessel['name'] = 'Sukuna';

console.log(vessel.name);

let SukunaVictims = ['Jogo', 'Marohaga'];

console.log(SukunaVictims);

SukunaVictims[2] = 'Gojo';

console.log(SukunaVictims);

SukunaVictims[3] = 0.5;

console.log(SukunaVictims);

console.log(SukunaVictims.length);

function domainExpasion(user)
{
    if (user == 'Sukuna')
        console.log(user + ': Malevolous Kitchen');
}

domainExpasion('Sukuna');