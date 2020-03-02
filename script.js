//Exo 1 :

let clickerButton = document.querySelector('footer');
//console.log (clickerButton)
clickCount = 0

let onFooterClick = () => {
  clickCount++
	console.log("clique numéro " + clickCount)
}

clickerButton.addEventListener('click', onFooterClick);

//Exo 2 : 

const menu = document.getElementById('navbarHeader')
const menuBtn = document.getElementsByClassName('navbar-toggler')[0];

function hamburger () {

  menu.classList.toggle("collapse");
 }

menuBtn.addEventListener('click', hamburger)

//Exo 3 :

const button = document.getElementsByClassName('btn-group');
const edit = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
//console.log (edit)

let onEditClick = () => {
  let firstCard = document.getElementsByClassName('card-text')[0]
  firstCard.style.color = "red";
}
console.log (onEditClick)

edit.addEventListener('click', onEditClick)

//Exo 4 :

const button2 = document.getElementsByClassName('btn-group')
const edit2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
console.log (edit2)

let onEdit2Click = () => {
  let secondCard = document.getElementsByClassName('card-text')[1]
  if (secondCard.style.color === 'green') {
		secondCard.style.color = '';
	}
	else  {
		secondCard.style.color = 'green';
	}
}

edit2.addEventListener('click', onEdit2Click)

//Exo 5 :

const bootstrapDisable = document.querySelector('header')

let onLinkClick = () => {
  let nucleaire = document.querySelector('link')
  if (nucleaire.disabled === false) {
		nucleaire.disabled = true;
	}
	else  {
		nucleaire.disabled = false;
	}
}

bootstrapDisable.addEventListener('click', onLinkClick)

//Exo 6 :




