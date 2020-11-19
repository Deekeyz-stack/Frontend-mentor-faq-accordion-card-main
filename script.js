const btns = document.querySelectorAll('.arrow-up');

btns.forEach(function(btns) {
    btns.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-question');
    })
});

