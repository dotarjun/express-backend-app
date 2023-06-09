const express = require('express')
const app = express()
const port = 3000

const USERS = [];

const QUESTIONS = [
    {
        title: "Two States",
        description: "Given an array, return the max of the array",
        testCases: [{
            input: [1, 2, 3, 4, 5],
            output: 5
        }]
    },
    {
        title: "Maximum Element",
        description: "Given an array of integers, return the maximum element in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 9
        }]
    },
    {
        title: "Minimum Element",
        description: "Given an array of integers, return the minimum element in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 1
        }]
    },
    {
        title: "Sum of Array",
        description: "Given an array of integers, return the sum of all the elements in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 21
        }]
    },
    {
        title: "Average of Array",
        description: "Given an array of integers, return the average of all the elements in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 4.2
        }]
    }
]

const SUBMISSIONS = [{

}]


// TODO add an object store

app.post('/signup', (req, res) => {
    // TODO add logic to decode body
    // body should have user email and password

    // Store email and paddword (as is for now) in the USERS array
    //(only if user doesnt already exist)


    //return status code 200
    res.send('Hello World! from route 1')
})

app.post('/login', (req, res) => {
    // TODO add logic to decode body
    // body should have user email and password



    // check if user with the given email exists in USERS array
    // also ensure that password is the same

    //if password is the same, return back 200 status code to the client
    // else return 401 status code to the client

    res.send('Hello World! from route 2')
})

app.get('/questions', (req, res) => {


    // TODO return the user all the quesrions
    res.send('Hello World! from route 2')
})

app.get('/submissions ', (req, res) => {

    // TODO return the users submission for this problem
    res.send('Hello World! from route 2')
})
app.post('/submissions ', (req, res) => {

    // TODO let the user submit a problem, randomly accept or reject the solution
    // store the submission in the submission array above
    res.send('Hello World! from route 2')
})


// TODO hard 
// create a route that lets an admin add a new problem 
// ensure that only admins can do that

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})