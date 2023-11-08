const bikeArray = [
    {
        name: "bike1",
        weight: 10
    },

    {
        name: "bike2",
        weight: 8
    },

    {
        name: "bike3",
        weight: 8.1
    },

    {
        name: "bike4",
        weight: 12
    },
];

// const [firstBike, secondBike, thirdBike, fourthBike] = bikeArray;

const firstBikeWeight = bikeArray[0].weight;
const secondBikeWeight = bikeArray[1].weight;
const thirdBikeWeight = bikeArray[2].weight;
const fourthBikeWeight = bikeArray[3].weight;

let lowestWeight = 999;
let result = "";
const printResult = document.getElementById("result");

for(i = 0; i < bikeArray.length; i++){
    let curBikeWeight = bikeArray[i].weight;
    if(curBikeWeight < lowestWeight){
        lowestWeight = curBikeWeight;
        result = `Lowest weight is: ${lowestWeight}`;
    } console.log(lowestWeight);
};

printResult.innerHTML = result;



// for (i = 0; i < bikeArray.length; i++){
    
//     if (bikeArray[i].weight < lowestWeight){
//         lowestWeight = bikeArray[i].weight;
//     }
// } console.log(lowestWeight);



// console.log(firstBike.weight, secondBike.weight, thirdBike.weight, fourthBike.weight);