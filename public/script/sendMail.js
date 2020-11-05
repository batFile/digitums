setTimeout(
    function() { 
        document.getElementById('sendMail').onclick = function() {
        name = document.getElementById('sumbitMail').getElementsByTagName('INPUT')[0].value;
        company = document.getElementById('sumbitMail').getElementsByTagName('INPUT')[1].value;
        email = document.getElementById('sumbitMail').getElementsByTagName('INPUT')[2].value;
        question = document.getElementById('sumbitMail').getElementsByTagName('TEXTAREA')[0].value;
        // console.log(name+' '+company+' '+email+' '+question);
        // if(email.length > 4) {
        //     var xhr = new XMLHttpRequest();
        //     xhr.open("POST", 'https://digitum.nl/Digitum/SendMail?name=' + name + '&company=' + company + '&email=' + email, true);
        //     xhr.setRequestHeader('Content-Type', 'application/json');
        //     xhr.send('"'+question.value+'"');
        // }
    }
}, 11);