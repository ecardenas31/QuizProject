document.addEventListener('DOMContentLoaded', function () {

    let bioQuizScore = localStorage.getItem('biologyQuizScore');
    let chemQuizScore = localStorage.getItem('chemistryQuizScore');
    let calcQuizScore = localStorage.getItem('calculusQuizScore');
    let compQuizScore = localStorage.getItem('computerQuizScore');
    let animQuizScore = localStorage.getItem('animalQuizScore');
    let hisQuizScore = localStorage.getItem('historyQuizScore');

    if (bioQuizScore !== null) {
        document.getElementById('bio').textContent = `Your latest score for Biology Quiz: ${bioQuizScore}%`;
    } else {
        // Handle the case where there's no score stored yet
        document.getElementById('bio').textContent = "No score available for Biology Quiz.";
    }

    if (chemQuizScore !== null) {
        document.getElementById('chem').textContent = `Your latest score for Chemistry Quiz: ${chemQuizScore}%`;
    } else {
        // Handle the case where there's no score stored yet
        document.getElementById('chem').textContent = "No score available for Chemistry Quiz.";
    }

    if (calcQuizScore !== null) {
        document.getElementById('calc').textContent = `Your latest score for Calculus Quiz: ${calcQuizScore}%`;
    } else {
        // Handle the case where there's no score stored yet
        document.getElementById('calc').textContent = "No score available for Calculus Quiz.";
    }

    if (compQuizScore !== null) {
        document.getElementById('com').textContent = `Your latest score for Computer Science Quiz: ${compQuizScore}%`;
    } else {
        // Handle the case where there's no score stored yet
        document.getElementById('com').textContent = "No score available for Computer Science Quiz.";
    }

    if (animQuizScore !== null) {
        document.getElementById('anim').textContent = `Your latest score for Animal Science Quiz: ${animQuizScore}%`;
    } else {
        // Handle the case where there's no score stored yet
        document.getElementById('anim').textContent = "No score available for Animal Science Quiz.";
    }

    if (hisQuizScore !== null) {
        document.getElementById('hist').textContent = `Your latest score for US History Quiz: ${hisQuizScore}%`;
    } else {
        // Handle the case where there's no score stored yet
        document.getElementById('hist').textContent = "No score available US History Quiz.";
    }

});