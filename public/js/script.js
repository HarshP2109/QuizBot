let quizData = [];
let Result = false;
let score;


//To get Data from the Server 
//Data :- 
// Questions (if user has not solved it then it will not store answers or if served as result then it will have answers), 
// Score (if user has already solved it), 
// Result (Result is already declared or not)

function onRender(){
  // Fetch data from the server
    fetch('/quiz')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Handle the received data
        quizData = data.Quiz; // Array data
        Result = data.valid; // Variable 1
        score = data.score; // Variable 2
        
        // Log the received data
        // console.log('Array data:', quizData);
        // console.log('Variable 1:', Result);
        // console.log('Variable 2:', score);
        if(score !== null && score!== "" && score!==undefined){
          showResults(score,quizData);
        }
        else{
          loadQuiz();
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

 }




  const quiz = document.querySelector('#quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.querySelector('#question')
  const submitBtn = document.querySelector('#submit')
  
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  
  let currentQuiz = 0
  let data = [];
  

  //To Fetch Data
  onRender();


  //For Loading Questions
  function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  //For Deselecting previous ticked answer
  function deselectAnswers() {
    answerEls.forEach(answer => (answer.checked = false))
  }
  
  //Check Selected Answer
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
  
    return answer
  }

  //Text Changing of Next Button
  function changeNext(last){
    let submit = document.getElementById('submit');

    if(submit.innerHTML === "Next"){
        submit.innerHTML = last;
    }
  }

  
    submitBtn.addEventListener('click', ()=>nextClicker());
  

    //Functionality of submit button, :-
    // Either it will work as Quiz
    // It can also work as answer displayer
    function nextClicker(){
        if(Result === false){
            const answer = getSelected()
            if (answer) {

            //   if (answer === quizData[currentQuiz].correct) score++
            data.push(answer);
            }
            else{
                return;
            }
        
            currentQuiz++
            if (currentQuiz < quizData.length) {
            loadQuiz();
            if(currentQuiz === quizData.length -1){
                changeNext("Submit");
            }
            } else {
            // console.log(data);
            SendServer(data);
            //   showResults()
            }
        }
        else{
            ResultQuiz++;
            if(ResultQuiz < quizData.length){
                loadResult();
                if(ResultQuiz === quizData.length -1){
                  changeNext("Retry");
                }
            }
            else{
                window.location.href = "/reload";
            }
        }
  };
  

// Function to send data to the server
async function SendServer(array) {
    try {
        // console.log(array);
        const response = await fetch('/result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(array)
        });
        
        if (response.ok) {
            // Redirect to another page upon successful submission
            // window.location.href = '/'; // Change '/success' to your desired URL
            onRender()
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}



  let ResultQuiz = 0;


  //surf through solved questions 
  function loadResult(){
    const quiz = document.querySelector('#quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.querySelector('#question')
    const submitBtn = document.querySelector('#submit')
    
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')


    const currentResData = quizData[ResultQuiz]
  
    questionEl.innerText = currentResData.question
    a_text.innerText = currentResData.a;
    b_text.innerText = currentResData.b;
    c_text.innerText = currentResData.c;
    d_text.innerText = currentResData.d;
    
    removeClassFromAll('wrong-answer');
    removeClassFromAll('correct-answer');

    switch(currentResData.correct){
        case 'a': setFocusOnRadio('a');
        a_text.classList.add('correct-answer');
        break;
        case 'b': setFocusOnRadio('b');
        b_text.classList.add('correct-answer');
        break;
        case 'c': setFocusOnRadio('c');
        c_text.classList.add('correct-answer');
        break;
        case 'd': setFocusOnRadio(d_text);
        d_text.classList.add('correct-answer');
        break;
    }

    switch(currentResData.answer){
        case 'a': setFocusOnRadio(a_text);
        if(checkAnswer(currentResData.correct, 'a'))
        a_text.classList.add('wrong-answer');
        break;
        case 'b': setFocusOnRadio('b');
        if(checkAnswer(currentResData.correct, 'b'))
        b_text.classList.add('wrong-answer');
        break;
        case 'c': setFocusOnRadio(c_text);
        if(checkAnswer(currentResData.correct, 'c'))
        c_text.classList.add('wrong-answer');
        break;
        case 'd': setFocusOnRadio(d_text);
        if(checkAnswer(currentResData.correct, 'd'))
        d_text.classList.add('wrong-answer');
        break;
    }


    
  }


  const submit = document.querySelector('#submit')

  
//Check if answer is correct or no
  function checkAnswer(answered,actual){
    if(answered != actual) return true
  }


  //It will create HTML elements for the Quiz
  function createQuizContainer() {
        // Create elements

        const quizHeader = document.createElement('div');
        quizHeader.classList.add('quiz-header');

        const h2 = document.createElement('h2');
        h2.id = 'question';
        h2.textContent = 'Question text';

        const ul = document.createElement('ul');

        const labels = ['Question A', 'Question B', 'Question C', 'Question D'];
        const ids = ['a', 'b', 'c', 'd'];

        for (let i = 0; i < labels.length; i++) {
            const li = document.createElement('li');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.id = ids[i];
            input.classList.add('answer');
            input.disabled = true

            const label = document.createElement('label');
            label.htmlFor = ids[i];
            label.id = ids[i] + '_text';
            label.textContent = labels[i];

            li.appendChild(input);
            li.appendChild(label);

            ul.appendChild(li);
        }

        const button = document.createElement('button');
        button.id = 'submit';
        button.textContent = 'Next';

        // Append elements
        quizHeader.appendChild(h2);
        quizHeader.appendChild(ul);
        quiz.appendChild(quizHeader);
        quiz.appendChild(button);

        button.addEventListener("click", ()=>nextClicker());

    }


    //After displaying of result, It will recreate the HTML elements for displaying answers of Quiz
    function startProcess(){
        quiz.innerHTML = "";
        createQuizContainer();
        loadResult();
    }


    // It will be for just Focusing on specific radio button
    function setFocusOnRadio(radioId) {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        let focusedRadio = null;
      
        radioButtons.forEach(radio => {
          radio.addEventListener('click', () => {
            if (focusedRadio !== null) {
              focusedRadio.blur(); // Remove focus from previously selected radio button
            }
            radio.focus(); // Set focus on the clicked radio button
            focusedRadio = radio; // Update the focused radio button
      
            // Prevent focus from changing
            radio.addEventListener('blur', event => {
              event.preventDefault();
              radio.focus();
            });
          });
      
          // Blur all other radio buttons initially
          if (radio.id !== radioId) {
            radio.blur();
          }
          else{
            radio.focus();
          }
        });
      
        // Set initial focus on the specified radio button
        // radioId.focus();
        focusedRadio = radioId;
      }

      //It will be for removing classes like Wrong-answer or correct-answer for next question display
      function removeClassFromAll(className) {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
          element.classList.remove(className);
        });
      }


//It will display result of how well person performed in Quiz
function showResults(score, quizData) {
  
  // Clear existing content
  quiz.innerHTML = '';
  
  // Create h2 element
  const h2Element = document.createElement('h2');
  let len = quizData.length
  h2Element.textContent = `You answered correctly at ${score}/${len} questions`;
  
  // Create button element
  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'Check Results';
  buttonElement.onclick = startProcess;
  
  // Append elements to quizContainer
  quiz.appendChild(h2Element);
  quiz.appendChild(buttonElement);
}

