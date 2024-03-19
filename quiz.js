document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter value
    const params = new URLSearchParams(window.location.search);//the link that is clicked gets the ? and the url after the ? of the url that was clicked to activate the quiz.html
    const selectedQuizClass = params.get('quiz'); // params.get gets the query parameter and since i set quiz=biologyQuiz or quiz=chemistryQuiz etc it gets the value that i set quiz too
  
    // Call the function to show the selected quiz
    activateQuiz(selectedQuizClass);
  
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
    const selectedQuiz = document.querySelector(`.${selectedQuizClass}`);
    selectedQuiz.style.display = 'none';

    const checkQuestions = selectedQuiz.querySelectorAll('input[type="radio"]:checked');
    let correctCount = 0;
    checkQuestions.forEach(input => {
      if(input.value === 'correct'){ correctCount++;}
    });
    const totalQuestions = 10;
    let finalGrade = ((correctCount/totalQuestions) * 100);

    var heading1 = document.createElement('h1');
    heading1.innerHTML= "Quiz Grade"
    heading1.style.color='blue';
    document.body.appendChild(heading1);

    var grade = document.createElement('p');
    grade.innerHTML= `Quiz Submitted! You got ${finalGrade} %`;
    document.body.appendChild(grade);
  }
  