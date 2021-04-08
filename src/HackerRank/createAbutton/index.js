const createAButton = (function(){
	const btn = document.createElement('button');
	btn.innerHTML=0;
	btn.setAttribute('id', 'btn');

	document.body.appendChild(btn);

	document.getElementById('btn').addEventListener('click', function() {
		this.innerHTML = parseInt(this.innerHTML) + 1;
	});
})()
