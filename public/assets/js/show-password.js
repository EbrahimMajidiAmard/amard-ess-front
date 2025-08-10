"use strict"

let createpassword = (type, ele) => {
    let input = document.getElementById(type);
    if (input) {
        input.type = input.type === "password" ? "text" : "password";
    }

    let icon = ele.tagName === "I" ? ele : ele.querySelector("i");
    if (icon) {
        let iconClasses = icon.classList;
        if (iconClasses.contains("ri-eye-line")) {
            iconClasses.remove("ri-eye-line");
            iconClasses.add("ri-eye-off-line");
        } else {
            iconClasses.add("ri-eye-line");
            iconClasses.remove("ri-eye-off-line");
        }
    }
};
