"use strict"
// const myUserName = fetch('https://api.github.com/users', {headers: {'Authorization': 'token 0509a94effbfe934bfcb0f71cd8cce187d078dc4'}});
// myUserName.then(response => console.log(response));
// myUserName.catch(error => console.log(error));

const userNames = fetch('https://api.github.com/users', {headers: {'Authorization': 'token 0509a94effbfe934bfcb0f71cd8cce187d078dc4'}})
        .then(response =>{
            console.log(response);
         return response.json();
})
        .then(data => {
            console.log(data)
            return data;
})



//
// userNames().then(user => {
//     console.log(user.length)
//     user.forEach(userObj => {
//
//         console.log(userObj.login);
//         })
//     }).catch(error => console.error(error));


function acceptsUserName() {
}

// const commitStatus = fetch('http://api.github.com/users', {headers: {'Authorization': 'token b7483c3b836e145bb3691a5bf075d656691130d1'}})
//     .then((response => {
//         console.log(response);
//     return response.json();
// }).then(data => {
//             console.log(data)
//             return data;
//         })
//     )