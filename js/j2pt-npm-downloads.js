var url2 = "https://api.npmjs.org/downloads/point/1970-01-01:2038-01-01/json-to-plain-text";

var xhr5 = new XMLHttpRequest();
xhr5.open("GET", url2);

xhr5.onreadystatechange = function () {
    if (xhr5.readyState === 4) {
        document.getElementById("j2pt-downloads").innerHTML = JSON.parse(this.responseText).downloads;
    }
};

xhr5.send();