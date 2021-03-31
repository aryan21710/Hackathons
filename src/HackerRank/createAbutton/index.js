const createAButton = (function(){
	const myBtn = document.createElement('button');
	const initialText = document.createTextNode(0);
	myBtn.setAttribute('id', 'btn');

	myBtn.appendChild(initialText);
	document.body.appendChild(myBtn);

	document.getElementById('btn').addEventListener('click', function() {
		this.innerHTML = parseInt(this.innerHTML) + 1;
	});
})()
