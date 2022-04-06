var url = "https://api.npmjs.org/downloads/point/1970-01-01:2038-01-01/json-to-plain-text";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        document.getElementById("j2pt-downloads").innerHTML = JSON.parse(this.responseText).downloads;
    }
};

xhr.send();