const express = require('express')
const app = express()
const port = 3000

const USERS = [];

const QUESTIONS = [
    {
        questionID: 1,
        title: "Two States",
        description: "Given an array, return the max of the array",
        testCases: [{
            input: [1, 2, 3, 4, 5],
            output: 5
        }]
    },
    {
        questionID: 2,
        title: "Maximum Element",
        description: "Given an array of integers, return the maximum element in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 9
        }]
    },
    {
        questionID: 3,
        title: "Minimum Element",
        description: "Given an array of integers, return the minimum element in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 1
        }]
    },
    {
        questionID: 4,
        title: "Sum of Array",
        description: "Given an array of integers, return the sum of all the elements in the array.",
        testCases: [{
            input: [1, 5, 2, 9, 4],
            output: 21
        }]
    },
    {
        questionID: 5,
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
    return res.status(200).send(SUBMISSIONS)
})

app.post('/submissions ', (req, res) => {
    const { questionID, solution } = req.body;
    const question = QUESTIONS.find(question => question.questionID === questionID);

    if (!question) {
        return res.status(400).send('Question not found')
    }

    const correct = Math.random() > 0.5;
    
    const submission = {
        questionID,
        solution,
        correct
    }

    SUBMISSIONS.push(submission);

    if (correct) {
        return res.status(200).send('Correct')
    }
    else {
        return res.status(400).send('Incorrect')
    }
})


// TODO hard 
// create a route that lets an admin add a new problem 
// ensure that only admins can do that

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})