const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// //accumulator = 0, element = 4 accumuloator now 4 (for the first pass through)
// //accumulator = 4, element = 5, accumulator value now = 9
// batteryBatches.reduce(function(accumulator, element){
//     return accumulator + element
//     }, 0)

const totalBatteries = batteryBatches.reduce((accumulator,element) => accumulator + element);