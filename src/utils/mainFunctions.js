

function removeCorrectProperty(arr) {
    return arr.map(obj => {
      const { correct, ...rest } = obj;
      return rest;
    });
  }


  function addAnswerProperty(arr, answerValues) {
    return arr.map((obj, index) => {
      const {...rest } = obj;
      const answer = answerValues[index];
      return { ...rest, answer };
    });
  }

  function getScore(arr) {
    let count = 0;
  
    for (const obj of arr) {
      const { answer, correct } = obj;
  
      // Check if 'answer' and 'correct' properties exist and have the same value
      if (answer !== undefined && correct !== undefined && answer === correct) {
        count++;
      }
    }
  
    return count;
  }

  module.exports = {
    removeCorrectProperty,
    addAnswerProperty,
    getScore
  }