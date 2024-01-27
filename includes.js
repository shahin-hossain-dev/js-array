// -------------includes---------------

const friends = ['ahsan', 'mohiuddin', 'faysal'];

// array এর মধ্যে কোনো element আছে কিনা তা চেক করতে ব্যবহার করতে হয় includes() function.

console.log(friends.includes('ahsan'));

// includes() function condition এ কাজে লাগে 

if (friends.includes('ahsan')) {
    console.log('We will meet soon')
}
else {
    console.log('We will not meet soon')
}

