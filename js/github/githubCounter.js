// var XMLHttpRequest = require('xhr2')
var http = new XMLHttpRequest();
let total_stars = 0;

function fromNow(date) {
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const WEEK = 7 * DAY;
    const MONTH = 30 * DAY;
    const YEAR = 365 * DAY;
    const units = [
        { max: 30 * SECOND, divisor: 1, past1: 'just now', pastN: 'just now', future1: 'just now', futureN: 'just now' },
        { max: MINUTE, divisor: SECOND, past1: 'a second ago', pastN: '# seconds ago', future1: 'in a second', futureN: 'in # seconds' },
        { max: HOUR, divisor: MINUTE, past1: 'a minute ago', pastN: '# minutes ago', future1: 'in a minute', futureN: 'in # minutes' },
        { max: DAY, divisor: HOUR, past1: 'an hour ago', pastN: '# hours ago', future1: 'in an hour', futureN: 'in # hours' },
        { max: WEEK, divisor: DAY, past1: 'yesterday', pastN: '# days ago', future1: 'tomorrow', futureN: 'in # days' },
        { max: 4 * WEEK, divisor: WEEK, past1: 'last week', pastN: '# weeks ago', future1: 'in a week', futureN: 'in # weeks' },
        { max: YEAR, divisor: MONTH, past1: 'last month', pastN: '# months ago', future1: 'in a month', futureN: 'in # months' },
        { max: 100 * YEAR, divisor: YEAR, past1: 'last year', pastN: '# years ago', future1: 'in a year', futureN: 'in # years' },
        { max: 1000 * YEAR, divisor: 100 * YEAR, past1: 'last century', pastN: '# centuries ago', future1: 'in a century', futureN: 'in # centuries' },
        { max: Infinity, divisor: 1000 * YEAR, past1: 'last millennium', pastN: '# millennia ago', future1: 'in a millennium', futureN: 'in # millennia' },
    ];
    const diff = Date.now() - (typeof date === 'object' ? date : new Date(date)).getTime();
    const diffAbs = Math.abs(diff);
    for (const unit of units) {
        if (diffAbs < unit.max) {
            const isFuture = diff < 0;
            const x = Math.round(Math.abs(diff) / unit.divisor);
            if (x <= 1) return isFuture ? unit.future1 : unit.past1;
            return (isFuture ? unit.futureN : unit.pastN).replace('#', x);
        }
    }
};

http.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data2 = JSON.parse(this.responseText);
        for (let i = 0; i < data2.length; i++) {
            total_stars += data2[i].stargazers_count
            if (data2[i].name == "truecallerjs") {
                var truecallerjs_stars = data2[i].stargazers_count;
                var truecallerjs_forks = data2[i].forks;
                var truecallerjs_update_time = fromNow(data2[i].updated_at);
            }
            if (data2[i].name == "json-to-plain-text") {
                var j2pt_stars = data2[i].stargazers_count;
                var j2pt_forks = data2[i].forks;
                var j2pt_update_time = fromNow(data2[i].updated_at);
            }
            if (data2[i].name == "Tor-Onion-Service-On-Heroku") {
                var tosoh_stars = data2[i].stargazers_count;
                var tosoh_forks = data2[i].forks;
                var tosoh_update_time = fromNow(data2[i].updated_at);
            }
        }

        document.getElementById("truecallerjs-stars").innerHTML = truecallerjs_stars;
        document.getElementById("truecallerjs-forks").innerHTML = truecallerjs_forks;
        document.getElementById("truecallerjs-updated-time").innerHTML = "Updated " + truecallerjs_update_time;

        document.getElementById("j2pt-stars").innerHTML = j2pt_stars;
        document.getElementById("j2pt-forks").innerHTML = j2pt_forks;
        document.getElementById("j2pt-updated-time").innerHTML = "Updated " + j2pt_update_time;

        document.getElementById("tosoh-stars").innerHTML =  tosoh_stars ;
        document.getElementById("tosoh-forks").innerHTML = tosoh_forks;
        document.getElementById("tosoh-updated-time").innerHTML = "Updated " +  tosoh_update_time;

        document.getElementById("total_stargazers_count").innerHTML = total_stars;

    }
};

http.open('GET', "https://api.github.com/users/sumithemmadi/repos", true);
http.send();
