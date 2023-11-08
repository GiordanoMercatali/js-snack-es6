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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getPointsandInjuries(){
    for (i = 0; i < teams.length; i++){
        const newPoints = getRandomInt(100);
        const newInjuries = getRandomInt(5);
        teams[i].points = newPoints;
        teams[i].injuries = newInjuries;
        
        console.log(teams[i].name, teams[i].points, teams[i].injuries);
    }
    return teams[i].name, teams[i].points, teams[i].injuries;
}

const newTeams [
    const {nameValue, _, injuriesValue} = teams[0],
    const {nameValue, _, injuriesValue} = teams[1],
    const {nameValue, _, injuriesValue} = teams[2],
] = teams;
