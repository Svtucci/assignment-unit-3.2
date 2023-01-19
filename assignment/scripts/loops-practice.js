console.log('****** Loops Practice *******');


// 1. 'for' loop

console.log('---- 1. For loops ----');

// Example: a for loop to console.log numbers from 0 to 3

console.log('count from 0 to 3');

// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)

for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// You must change the condition part of the for loop 

console.log('count from 0 to 5');
for(let i=0; i<5; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// You must change the initialization

console.log('count from 3 to 5');
for(let i=3; i<5; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// You must change the counter in the for.

console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<=10; i+=2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>=0; i--) {
  console.log(i);
}


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (let star of stars) { //Still iff on the setup, so we use a const/let to log whatever we want for "star", of the name of the array? And then reference the "star" or constant in the loop in the console log?
  console.log('Some stars:', [star]);
}

// for 2a. I am unsure of this, please let me know if it is incorrect


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let index = 0

while (index < stars.length) {
  console.log(stars[index]);
  index++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5')

let count = 0
while (count < 6 ) {
  console.log(count);
  count++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let backwards = 10
while (backwards <= 10  && backwards >=5) {
  console.log(backwards);
  backwards--
}

