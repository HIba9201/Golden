menu.onclick = function() {
    let x = document.getElementById('TopNav');
    let y = document.getElementById('TopMenu');
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
    }
    else {
        x.className = "topnav";
        y.className = "top_menu";
    }
};