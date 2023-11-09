const teams = [
    {
        name: "Inter",
        points: 0,
        injuries: 0
    },

    {
        name: "Juve",
        points: 0,
        injuries: 0
    },

    {
        name: "Milan",
        points: 0,
        injuries: 0
    },
];

let result = "";
const printResult = document.getElementById("result");

createNewTeams();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getPointsandInjuries(){
    for (i = 0; i < teams.length; i++){
        // const newPoints = getRandomInt(100);
        // const newInjuries = getRandomInt(5);
        // teams[i].points = newPoints;
        // teams[i].injuries = newInjuries;

        teams[i].points = getRandomInt(100);
        teams[i].injuries = getRandomInt(10);
        
        console.log(teams[i].name, teams[i].points, teams[i].injuries);
    }
    return;
}

function createNewTeams(){
    getPointsandInjuries();
    const newTeams = teams.map((team)=>{
        const {name, injuries} = team;
        return{name, injuries};
});

console.log(newTeams);
}

/*
teams.forEach((team) => {
    team.injuries = getRandomInt(10);
    team.points = getRandomInt(100);
});

const newTeams = teams.map((team)=>{
    const {name, injuries} = team;
    return{name, injuries};
});

console.log(newTeams); */
