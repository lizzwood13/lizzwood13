
document.getElementById('pop').style.backgroundColor="#FFCF2D";

document.getElementById("popsign").style.backgroundColor="#FFCF2D";
appearIntervalLeft();

appearIntervalMiddle();

appearIntervalRight();

function appearIntervalLeft()
{
    let card = document.getElementById("personal")
    card.hidden = true;
    setTimeout(() => {
        card.hidden = false;
    }, 1000);
}
function appearIntervalMiddle()
{
    let card = document.getElementById("business")
    card.hidden = true
    setTimeout(() => {
        card.hidden = false;
    }, 2000);
}
function appearIntervalRight()
{
    let card = document.getElementById("enterprise")
    card.hidden = true;
    setTimeout(() => {
        card.hidden = false;
    }, 3000);
}

colorLinks("#0000FF");

function colorLinks(hex) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href) {
            links[i].style.backgroundColor = hex;
        }
    }
}

document.getElementById("bpricing").style.fontSize = "x-large";

function openWindow() {
    alert("You have been signed up for the program!");

    var email = prompt("Email: ");
    p = document.createElement("p");
    p.innerHTML = email;
    document.getElementById("email" + id).appendChild(p);

}

function setValue(value) {
    document.getElementById('value').value = value;
}


