//--------------splice()----------------------

const numbers = [10, 20, 30, 40, 50, 60, 70];

// কোনো ‍array থেকে element গুলো cut করে নিয়ে আসতে চাইলে splice() function use করা হয়।
// splice() পূর্বের array থেকে element গুলো cut করে এনে নতুন array তৈরী করবে এবং main array তে element add করা যাবে।
// 
/**
 * splice() এর মধ্যে 
 * ১. start এ index value, অর্থাৎ কোন index থেকে শুরু হবে।
 * ২. কয়টা পর্যন্ত cut করবে
 * ৩. যে ভ্যালু গুলো add করবে তা cut করা element এর স্থানে বসাবে।
 * */
// const newNumbers = numbers.splice(1, 3);
const newNumbers2 = numbers.splice(2, 3, 99, 100);
console.log(numbers)
console.log(newNumbers2)

