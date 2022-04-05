var i = 0;
var j = 0;
var k = 0;
var a = 0;
var data = "";

var command1 = '~$ npm install -g  truecallerjs';
var command2 = '~$ truecallerjs -s  +919912345678 --name';

function cmd1Color(i) {
    var green = [0];
    var yellow = [3, 4, 5]
    var blue = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    var gray = [15, 16];

    if (green.includes(i)) {
        return "green";
    } else if (yellow.includes(i)) {
        return "yellow";
    } else if (blue.includes(i)) {
        return "rgb(18, 223, 238)";
    } else if (gray.includes(i)) {
        return "gray";
    } else {
        return "white";
    }

}

function cmd2Color(j) {
    var green = [0];
    var yellow = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    var blue = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
    var gray = [16, 17, 34, 35, 36, 37, 38, 39];

    if (green.includes(j)) {
        return "green";
    } else if (yellow.includes(j)) {
        return "yellow";
    } else if (blue.includes(j)) {
        return "rgb(18, 223, 238)";
    } else if (gray.includes(j)) {
        return "gray";
    } else {
        return "white";
    }

}


function callTruecallerjs() {
    if (i < command1.length) {
        data += "<span style=\"color:" + cmd1Color(i) + ";\">" + command1.charAt(i) + "<span>";
        document.getElementById("cmd1").innerHTML = data
        i++;
        setTimeout(callTruecallerjs, 100);
    } else if (i == command1.length) {
        data = "<span style=\"color: green;\">~</span><span style=\"color: white;\">$ </span><span style=\"color: yellow;\">npm</span><span style=\"color: white;\"> install </span><span style=\"color: gray;\"> -g </span><span style=\"color: rgb(18, 223, 238);\">truecallerjs</span><br>"
        document.getElementById("cmd1").innerHTML = data
        i++;
        setTimeout(callTruecallerjs, 50);
        // var j = 0;

    } else if (j < 19) {
        var npmLines = ['[#.................] / idealTree:<span style="color: yellow;">npm</span>: <span style="background-color: white;color: black;">sill</span> <span style="color: magenta;">idealTree </span>buildDeps',
            '[##................] \\ idealTree:<span style="color: yellow;">npm</span>: <span style="background-color: white;color: black;">sill</span> <span style="color: magenta;">idealTree </span>buildDeps',
            '[###...............] / idealTree:<span style="color: yellow;">npm</span>: <span style="background-color: white;color: black;">sill</span> <span style="color: magenta;">idealTree </span>buildDeps',
            '[####..............] \\ idealTree:<span style="color: yellow;">npm</span>: <span style="background-color: white;color: black;">sill</span> <span style="color: magenta;">idealTree </span>buildDeps',
            '[#####.............] / idealTree:<span style="color: yellow;">npm</span>: <span style="background-color: white;color: black;">sill</span> <span style="color: magenta;">idealTree </span>buildDeps',
            '[######............] \\ idealTree:<span style="color: yellow;">npm</span>: <span style="background-color: white;color: black;">sill</span> <span style="color: magenta;">idealTree </span>buildDeps',
            '[#######...........] / idealTree:<span style="color: yellow;">yargs</span>: <span style="color: magenta;">timing idealTree:#root</span> Completed in 1678ms',
            '[########..........] / idealTree:<span style="color: yellow;">yargs</span>: <span style="color: magenta;">timing idealTree:#root</span> Completed in 1678ms',
            '[#########.........] \\ idealTree:<span style="color: yellow;">yargs</span>: <span style="color: magenta;">timing idealTree:#root</span> Completed in 1678ms',
            '[##########........] / idealTree:<span style="color: yellow;">yargs</span>: <span style="color: magenta;">timing idealTree:#root</span> Completed in 1678ms',
            '[###########.......] \\ idealTree:<span style="color: yellow;">yargs</span>: <span style="color: magenta;">timing idealTree:#root</span> Completed in 1678ms',
            '[############......] / idealTree:<span style="color: yellow;">yargs</span>: <span style="color: magenta;">timing idealTree:#root</span> Completed in 1678ms',
            '[#############.....] \\ reify:npm:<span style="color: green;"> timing reifyNode:node_modules/truecallerjs/node_modules/axios</span> Completed in 352ms',
            '[##############....] / reify:npm:<span style="color: green;"> timing reifyNode:node_modules/truecallerjs/node_modules/axios</span> Completed in 352ms',
            '[###############...] \ reify:npm:<span style="color: green;"> timing reifyNode:node_modules/truecallerjs/node_modules/axios</span> Completed in 352ms',
            '[################..] / reify:npm:<span style="color: green;"> timing reifyNode:node_modules/truecallerjs/node_modules/axios</span> Completed in 352ms',
            '[#################.] \\ reify:npm:<span style="color: green;"> timing reifyNode:node_modules/truecallerjs/node_modules/axios</span> Completed in 352ms',
            '[##################] / reify:npm:<span style="color: green;"> timing reifyNode:node_modules/truecallerjs/node_modules/axios</span> Completed in 352ms',
            '<span style="color: white;"> changed 25 packages, and audited 26 packages in 5s</span><br><span style="color: white;"> 3 packages are looking for funding</span><br><span style="color: white;"> run `npm fund` for details </span><br><span style="color: white;"> found</span> <span style="color: green;">0</span> <span style="color: white;">vulnerabilities</span>'
        ]
        document.getElementById("cmd1").innerHTML = data + npmLines[j];
        j++;
        setTimeout(callTruecallerjs, 100);
        return 0;
    } else if (j == 19) {
        data = '<span style="color: green;">~</span><span style="color: white;">$ </span><span style="color: yellow;">npm </span><span style="color: white;"> install </span><span style="color: gray;"> \-\g\ </span><span style="color: rgb(18, 223, 238);">  truecallerjs </span><br><span style="color: white;"> changed 25 packages, and audited 26 packages in 5s</span><br><span style="color: white;"> 3 packages are looking for funding</span><br><span style="color: white;"> run `npm fund` for details </span><br><span style="color: white;"> found</span> <span style="color: green;">0</span> <span style="color: white;">vulnerabilities</span><br>'
        document.getElementById("cmd1").innerHTML = data;
        j++;
        setTimeout(callTruecallerjs, 100);
    } else if (k < command2.length) {
        data += "<span style=\"color:" + cmd2Color(k) + ";\">" + command2.charAt(k) + "<span>";
        document.getElementById("cmd1").innerHTML = data;
        k++;
        setTimeout(callTruecallerjs, 100);
    } else {
        document.getElementById("cmd1").innerHTML = '<span style="color: green;">~</span>$ <span style="color: yellow;">npm </span> install <span style="color: gray;">-g </span><span style="color: rgb(18, 223, 238);"> truecallerjs </span><br>changed 25 packages, and audited 26 packages in 5s<br>3 packages are looking for funding<br> run `npm fund` for details<br>found <span style="color: green;">0</span> vulnerabilities<br><span style="color: green;">~</span>$ <span style="color: yellow;"> truecallerjs </span> <span style="color: gray;">-s </span> <span style="color: rgb(18, 223, 238);">+919912345678 </span><span style="color: gray;"> --name </span><br><span style = "color: yellow;"> Name </span>: <span style="color: rgb(14, 236, 14);"> Sumith Emmadi</span > ';
    }
}

function isOnScreen(elem) {
    // if the element doesn't exist, abort
    if (elem.length == 0) {
        return;
    }
    var $window = jQuery(window)
    var viewport_top = $window.scrollTop()
    var viewport_height = $window.height()
    var viewport_bottom = viewport_top + viewport_height
    var $elem = jQuery(elem)
    var top = $elem.offset().top
    var height = $elem.height()
    var bottom = top + height

    return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

jQuery(document).ready(function() {
    window.addEventListener('scroll', function(e) {
        if (isOnScreen(jQuery('.projects-container'))) {
            if (a == 0) {
                a++;
                setTimeout(callTruecallerjs, 3000);
            }

        };
    });
});