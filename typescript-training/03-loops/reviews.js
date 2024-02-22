var reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0.0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("The total is ".concat(total, " with the average being ").concat(average, " "));
