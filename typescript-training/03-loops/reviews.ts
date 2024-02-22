
let reviews: number[] = [1,2,3,4,5,6,7,8,9,10];
let total: number = 0.0;

for (let i=0;i<reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}
let average: number = total / reviews.length;


console.log(`The total is ${total} with the average being ${average} `);