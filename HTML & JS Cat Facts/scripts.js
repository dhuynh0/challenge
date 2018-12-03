const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'cat.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// CORS Proxy used to enable access to Cat Facts API, forbidden otherwise.
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    data.all.forEach(catFact => { 
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      var str1 = 'Contributor: ';
      var str2 = catFact.user.name.first;
      var str3 = ' ';
      var str4 = catFact.user.name.last;
      var res = str1.concat(str2,str3, str4)
      h1.textContent = res;

      const p = document.createElement('p');
      p.textContent = catFact.text;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  }

request.send();