document.addEventListener('DOMContentLoaded', function() { //this allows the JS file to load after the html and css to prevent it from messing with anything
 
    const params = new URLSearchParams(window.location.search);//the link that is clicked gets the ? and the url after the ? of the url that was clicked to activate the quiz.html
    const selectedQuizClass = params.get('quiz'); // params.get gets the query parameter and since i set quiz=biologyQuiz or quiz=chemistryQuiz etc it gets the value that i set quiz too
  
    // Call the function to show the selected quiz
    activateQuiz(selectedQuizClass);

    document.querySelectorAll('.submitQuiz').forEach(button => { //looks for all buttons with class submitQuiz
      button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      gradeQuiz(selectedQuizClass); // Call gradeQuiz with the selectedQuizClass
    });
    });
  });
  
  function activateQuiz(selectedQuizClass) {
    // Hide all quiz sections first
    document.querySelectorAll('.quiz-section').forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected quiz
    const selectedQuiz = document.querySelector(`.${selectedQuizClass}`); //selects the class with the parameters from the selectedQuizClass
    if (selectedQuiz) {
      selectedQuiz.style.display = 'block'; // changes the display from none to block so that it shows
    } else {
      console.error('Selected quiz not found');
    }

    
  }

  function gradeQuiz(selectedQuizClass){
    const selectedQuiz = document.querySelector(`.${selectedQuizClass}`); //get the current quiz and hide it
    selectedQuiz.style.display = 'none';

    const checkQuestions = selectedQuiz.querySelectorAll('input[type="radio"]:checked'); //gets which radios were selected from each question
    let correctCount = 0;
    checkQuestions.forEach(input => {
      if(input.value === 'correct'){ correctCount++;} //checks which inputs had the value of correct and adds it to the correctcount
    });
    const totalQuestions = 10;
    let finalGrade = ((correctCount/totalQuestions) * 100); //does math for overall grade.

    var heading1 = document.createElement('h1'); // creates title and displays it
    heading1.innerHTML= "Quiz Grade"
    heading1.style.color='blue';
    document.body.appendChild(heading1);

    var grade = document.createElement('p');
    grade.innerHTML= `Quiz Submitted! You got ${finalGrade} %`; // displays grade
    document.body.appendChild(grade);
  }
  