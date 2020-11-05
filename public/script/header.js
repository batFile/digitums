function eee(button) {
    form = document.getElementById('contactForm');
    form.style.display = 'none';
    button.onclick = function() {
        if (form.style.display === 'none') {
            form.style.display = 'block';
        }
    };
}

function modal() {
    eee(document.getElementsByClassName('cont-img')[0]);
    eee(document.getElementsByClassName('cont-img')[1]);
    document.getElementsByClassName('close')[0].onclick = function(){document.getElementById('contactForm').style.display = 'none';console.log('close');}
}

function all() {
    modal();
}

setTimeout(all, 10);