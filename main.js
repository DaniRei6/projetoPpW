const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://philippwiddra-piltlib-compendium.p.rapidapi.com/champion/119/");
xhr.setRequestHeader("X-RapidAPI-Host", "philippwiddra-piltlib-compendium.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "0ec6d3bb92mshe1de9b2ce8a8d47p120edfjsne43019a674de");

xhr.send(data);