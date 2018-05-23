// get text
document.getElementById('button1').addEventListener('click', getText);

// get json
document.getElementById('button2').addEventListener('click', getJson);

// get api
document.getElementById('button3').addEventListener('click', getApi);


// get data from text file
function getText() {
    fetch('text.txt')
        .then(function(res) {
            return(res.text());
        })
        .then(function(data) {
            document.getElementById('div').innerHTML = `
                <h2>${data}</h2>
            `
        })
        .catch(function(err) {
            console.log(err);
        });
}

// get data from json file
function getJson() {
    fetch('text.json')
        .then(function(res) {
            return(res.json());
        })
        .then(function(data) {
            data.forEach(el => {
                document.getElementById('div').innerHTML += `
                    <h2>${el.title}</h2>
                `
            });
        })
        .catch(function(err) {
            console.log(err);
        });
}

// get data from api
function getApi() {
    fetch('https://api.github.com/users')
        .then(function(res) {
            return(res.json());
        })
        .then(function(data) {
            data.forEach(el => {
                document.getElementById('div').innerHTML += `
                    <h2>${el.login}</h2>
                `
            });
        })
        .catch(function(err) {
            console.log(err);
        });
}