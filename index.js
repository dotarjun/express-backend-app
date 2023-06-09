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
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    if (USERS.find(user => user.email === userEmail)) {
        error = {
            message: 'User already exists'
        }
        return res.status(400).send(error)
    }

    else {
        USERS.push({
            email: userEmail,
            password: userPassword
        })
        return res.status(200).send('User created')
    }
})

app.post('/login', (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    if (USERS.find(user => (user.email === userEmail) && (user.password === userPassword))) {
        return res.status(200).send('User logged in')
    }

    else if (USERS.find(user => user.email === userEmail)) {
        return res.status(401).send('Incorrect password')
    }

    else {
        return res.status(401).send('User not found')
    }
})

app.get('/questions', (req, res) => {
    return res.status(200).send(QUESTIONS)
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