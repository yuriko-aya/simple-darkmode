function check_the_toggle() {
    document.getElementById("darktoggle").checked = true;
}

function uncheck_the_toggle() {
    document.getElementById("darktoggle").checked = false;
} 

function rise_from_darkness() {
    document.getElementsByTagName("BODY")[0].removeAttribute("style", "background-color: #222;");
    document.getElementById("page").removeAttribute("style", "background-color: black; color: white;");
    var items = document.getElementsByClassName("menu-item")
    for (var i = 0; i < items.length; i++) {
        items[i].removeAttribute("style", "background-color: black; color: white;");
    }
    document.getElementById("page").removeAttribute("dark-mode", "true");
    set_darkness("false");
}

function fall_into_darkness() {
    document.getElementsByTagName("BODY")[0].setAttribute("style", "background-color: #222;");
    document.getElementById("page").setAttribute("style", "background-color: black; color: white;");
    var items = document.getElementsByClassName("menu-item")
    for (var i = 0; i < items.length; i++) {
        items[i].setAttribute("style", "background-color: black; color: white;");
    }
    document.getElementById("page").setAttribute("dark-mode", "true");
    set_darkness("true");

}

function set_darkness(state) {
    localStorage.setItem("darkness_value",state)
}

function check_darkness_status() {
    var darkness_status = localStorage.getItem("darkness_value");
    if (darkness_status === "true") {
        check_the_toggle();
        fall_into_darkness();
    } else {
        uncheck_the_toggle();
        rise_from_darkness();
    }

}

function choose_the_way() {
        pageel = document.getElementById("page");
        if (pageel.hasAttribute("dark-mode")) {
            rise_from_darkness();
        } else {
            fall_into_darkness();
        }
    }
;
