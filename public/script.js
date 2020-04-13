var slider = 1;
Slider(slider);
function incrementerslider(i) {
    Slider(slider += i);
}


function Slider(n) {
    var i;
    var y = document.getElementsByClassName("slider-img");
    if (y.length) {
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        if (n > y.length) slider = 1;
        if (n < 1) slider = y.length;

        y[slider - 1].style.display = "block";
    }
}

// Converter les lettres des formulaires au majuscule
var inputs = document.querySelectorAll('.uppercased');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function (event) {
        event.target.value = event.target.value.toUpperCase();
    });
}

// Validation de la formulaire d'inscription
var submitBtn = document.getElementById("submit-inscription");
if (submitBtn != null) {
    submitBtn.addEventListener('click', function (e) {
        var genre = document.getElementById("genre").value;
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("telephone").value;
        var pass = document.getElementById("pass").value;
        var passConf = document.getElementById("passConf").value;
        var message = document.getElementById("message").value;


        if (genre == '...' || nom == '' || prenom == '' || email == '' || telephone == '' || pass == '' || passConf == '' || message == '') {
            alert('Le remplissage de tout les champs est obligatoire');
        } else {
            if (!/^[a-zA-Z]+$/.test(nom) || !/^[a-zA-Z]+$/.test(prenom)) {
                alert('Le nom ou prenom doit contient que des lettres')
            } else if (pass != passConf) {
                alert('Les 2 mot de passes doit etre egeaux');
            } else if (email.indexOf('@') == -1) {
                alert("L'email doit etre un email valide");
            } else if (!/^[0-9]{10}$/.test(telephone)) {
                alert('Le numero de telephone doit contient 10 chiffres')
            } else {
                alert('Vous êtes inscrit avec succès');
            }
        }
    });
}

// Get the modal
var modal = document.getElementById('myModal');

var reserverBtns = document.getElementsByClassName("reservation-section-bouton");

for (var i = 0; i < reserverBtns.length; i++) {

    reserverBtns[i].addEventListener('click', function (e) {
        e.preventDefault();

        modal.style.display = "block";
    });
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


// Validation de la formulaire de reservation
var submitBtn = document.getElementById("submit-reservation");
if (submitBtn != null) {
    submitBtn.addEventListener('click', function (e) {
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var email = document.getElementById("email").value;
        var telephone = document.getElementById("telephone").value;
        var dd = document.getElementById("date1").value;
        var da = document.getElementById("date2").value;

        var d1 = (new Date(dd)).getTime();
        var d2 = (new Date(da)).getTime();

        var periode = (d2 - d1) / (24 * 3600 * 1000);

        if (nom == '' || prenom == '' || email == '' || telephone == '' || dd == '' || da == '') {
            alert('Le remplissage de tout les champs est obligatoire');
        } else {
            if (!/^[a-zA-Z]+$/.test(nom) || !/^[a-zA-Z]+$/.test(prenom)) {
                alert('Le nom ou prenom doit contient que des lettres')
            } else if (email.indexOf('@') == -1) {
                alert("L'email doit etre un email valide");
            } else if (!/^[0-9]{10}$/.test(telephone)) {
                alert('Le numero de telephone doit contient 10 chiffres')
            } else if (d1 > d2) {
                alert('La date de reservation doit etre l\'inferieur')
            } else {
                document.getElementById('nom-place').innerText = nom;
                document.getElementById('prenom-place').innerText = prenom;
                document.getElementById('email-place').innerText = email;
                document.getElementById('telephone-place').innerText = telephone;
                document.getElementById('periode-place').innerText = periode;

                modal.style.display = "none";

                var modal2 = document.getElementById('myModal2');
                modal2.style.display = "block";

                var span = document.getElementsByClassName("close")[1];
                span.onclick = function () {
                    modal2.style.display = "none";
                }

                window.onclick = function (event) {
                    if (event.target == modal2) {
                        modal2.style.display = "none";
                    }
                }

            }
        }
    });
}
