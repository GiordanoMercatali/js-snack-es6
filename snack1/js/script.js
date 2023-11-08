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

// const firstBikeWeight = bikeArray[0].weight;
// const secondBikeWeight = bikeArray[1].weight;
// const thirdBikeWeight = bikeArray[2].weight;
// const fourthBikeWeight = bikeArray[3].weight;

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

// bikeArray.forEach((bike) =>{
//     curWeight = getWeight(bike.weight);
//     console.log(bike.weight);
//     if (curWeight < lowestWeight){
//         lowestWeight = curWeight;
//         printResult.append(lowestWeight);
//     }

// });

function getWeight(bike){
    const { name, weight } = bike;
    const weightElem = document.createElement("div");
    weightElem.innerHTML = `${name} has the lowest weight of ${weight}`
}

// function getWeight(bike){
//     const [firstBike, secondBike, thirdBike, fourthBike] = bike;
//     const weightElem = document.createElement("div");
//     weightElem.innerHTML = `${bike.name} has the lowest weight of ${bike.weight}`
// }

printResult.innerHTML = result;

// for (i = 0; i < bikeArray.length; i++){
    
//     if (bikeArray[i].weight < lowestWeight){
//         lowestWeight = bikeArray[i].weight;
//     }
// } console.log(lowestWeight);



// console.log(firstBike.weight, secondBike.weight, thirdBike.weight, fourthBike.weight);