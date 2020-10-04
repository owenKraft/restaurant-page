export const display = (selector) => {
    return createDiv(selector);
}

let createDiv = (selector) => {
    
    document.querySelector(selector).appendChild(createAbout());

    return createDiv;
}

let createAbout = () => {
    let element = document.createElement("p");
    element.innerText = "We don't make much, but we make it well. If you're craving something not listed, just ask a server or at the bar. We can either make it from scratch, or point you to a quality restaurant that can. Find us at 123 Main Street, Nowhereville, USA, or check our socials. Take out only.";
    return element;
}