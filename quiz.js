document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter value
    const params = new URLSearchParams(window.location.search);
    const selectedQuizClass = params.get('quiz'); // e.g., 'biologyQuiz' or 'chemistryQuiz'
  
    // Call the function to show the selected quiz
    activateQuiz(selectedQuizClass);
  });
  
  function activateQuiz(selectedQuizClass) {
    // Hide all quiz sections first
    document.querySelectorAll('.quiz-section').forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected quiz
    const selectedQuiz = document.querySelector(`.${selectedQuizClass}`);
    if (selectedQuiz) {
      selectedQuiz.style.display = 'block';
    } else {
      // If no quiz matches the selection, you could handle this case,
      // perhaps by showing an error message or redirecting the user.
      console.error('Selected quiz not found');
    }
  }
  