let elSeachr = document.querySelector('.search')
let elUL = document.querySelector('.nav-pills')
let elText = document.querySelector('.text')
let elRasm = document.querySelector('.rasm')
let elVideo = document.querySelector('.video')


elText.addEventListener('click', () => {
    elText.classList.add('bor1')
    elText.classList.remove('bor2')
    elText.classList.remove('bor3')

})

elRasm.addEventListener('click', () => {
    elText.classList.add('bor2')
    elText.classList.remove('bor1')
    elText.classList.remove('bor3')

})
elVideo.addEventListener('click', () => {
    elText.classList.add('bor3')
    elText.classList.remove('bor2')
    elText.classList.remove('bor1')

})



    


elSeachr.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchText = e.target.elements.search.value

    

})


fetch('https://google-search64.p.rapidapi.com/?query=YouTube&max=20', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e43643c12msh3c4a83a980163b6p14579fjsn7fd24cb7d396',
		'X-RapidAPI-Host': 'google-search64.p.rapidapi.com'
	}
})
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
