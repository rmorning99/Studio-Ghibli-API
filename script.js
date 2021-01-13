const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


//Create a variable and assaign a new XMLHttpRequest object to it.

var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    var data = JSON.parse(this.response)


    if (request.status >= 200 && request.status < 400) {

        data.forEach((movie) => {
            //creates a div with a class of card
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            //creates a h1 with text content from films titles
            const h1 = document.createElement('h1');
            h1.textContent = movie.title

            //creates a p with text content from film desciptions

            const p = document.createElement('p')
            movieDescription = movie.description.substring(0, 300)
            p.textContent = `${movieDescription}...`

            container.appendChild(card)

            //each card contains an h1 and a p element

            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        console.log('error')
    }


}

//send request

request.send()