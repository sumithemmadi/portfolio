var http = new XMLHttpRequest();
let total_stars = 0;

http.onreadystatechange = function() {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data2 = JSON.parse(this.responseText);
        for (let i = 0; i < data2.length; i++) {
            total_stars += data2[i].stargazers_count
        }
        document.getElementById('total_stargazers_count').innerHTML = total_stars;

    }
};

http.open('GET', "https://api.github.com/users/sumithemmadi/repos", true);
http.send();