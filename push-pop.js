// ---------push(), pop()---------
const age = [];

const numbers = [10, 20, 30, 40];
numbers.push(50); // push করলে array element এর শেষে গিয়ে new element টা add হবে।
numbers.push(55, 60, 65); // push করে একাধিক নাম্বারও array এর মধ্যে add করা যায়।

// console.log(numbers)

// -------------pop()..............

const friends = ['shahin', 'mohiuddin', 'faysal'];
friends.push('Ahsan')

friends.pop() // pop() array এর মধ্যে থেকে last element কে delete করে দেয়।
const out2 = friends.pop();
console.log(friends);
console.log(out2)

