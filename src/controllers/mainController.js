const data = require("../config/database");
const { removeCorrectProperty, addAnswerProperty, getScore } = require("../utils/mainFunctions");
const path = require('path');


const mainQuiz = (req,res) => {
    let valid = false;
    let Quiz = [];
    let score = null;
    // console.log(req.session.Answer);
    let  Answer = req.session.Answer;

    if(Answer){         //Check if user has given Test or not, if given then calculate its marks
        Quiz = addAnswerProperty(data,Answer);
        valid = true;
        score = getScore(Quiz)
        console.log("Working");
    }else{              //If user has not given test
        Quiz = removeCorrectProperty(data)
        valid = false;
    }

    res.json({Quiz,valid,score});
}


const mainFile = (req,res) => {
    // res.render('Quizer')
    const filePath = path.join(__dirname, '../../views/index.html');
    res.sendFile(filePath);
}


const getResult = (req,res)=>{
    let result = req.body;
    // console.log(result);
    req.session.Answer = result;

    mainQuiz(req,res);
}


const reload = (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
}


module.exports = {
    mainQuiz,
    getResult,
    reload,
    mainFile
}