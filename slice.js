// --------------------slice()----------------

const numbers = [10, 20, 30, 40, 50, 60];

// array এর মধ্য থেকে কোনো নির্দিষ্ট এক বা একাধিক element কে copy করতে ব্যবহার করতে হয় slice()
// slice() function দিয়ে slice করলে element গুলো copy করে নতুন একটা array তৈরী করে। মূল array তে কোনো প্রভাব পরবে না।
console.log(numbers.slice(1, 5));//slice এর প্রথম Value টা হলো index নাম্বার  এবং পরেরটা হলো কতো পর্যন্ত copy করবে।

const newArray = numbers.slice(2, 4); 