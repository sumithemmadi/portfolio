var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        document.getElementById('followers').innerHTML = data.followers;
        document.getElementById('following').innerHTML = data.following;
        document.getElementById('total-repos').innerHTML = data.public_repos;
    }
};

xhr.open('GET', "https://api.github.com/users/sumithemmadi", true);
xhr.send();