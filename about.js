console.log("hello world");

function giveCompliment(evt) {
	evt.preventDefault(evt);
	alert("hello beautiful")
}

function handleSubmit(evt) {
	evt.preventDefault(evt);
	
	alert("submitted successfully");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit); 

thing.addEventListener('mouseover', giveCompliment);