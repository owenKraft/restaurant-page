const titleText = "Black Cat Cafe"
const taglineText = "Food for the people, by the people."
const imageSRC = "https://www.pinclipart.com/picdir/big/16-162947_black-cat-antique-illustration-funny-animal-clipart-cat.png"

export const createHeader = () => {
    return createDiv();
}

let createDiv = () => {
    let pageLoadDiv = document.createElement("div");
    pageLoadDiv.setAttribute("id","pageLoad-div");
    pageLoadDiv.appendChild(createHeaderArea());
    pageLoadDiv.appendChild(createTabNav());
    pageLoadDiv.appendChild(createContentArea());
    return pageLoadDiv;
}

let createHeaderArea = () => {
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("id","header-div");
    headerDiv.appendChild(createImage());
    
    let headerTextArea = document.createElement("div");
    headerTextArea.setAttribute("id","header-text-area");
    headerTextArea.appendChild(createTitle());
    headerTextArea.appendChild(createTagline());

    headerDiv.appendChild(headerTextArea);

    return headerDiv;
}

let createTitle = () => {
    let element = document.createElement("h1");
    element.setAttribute("id","title");
    element.innerHTML = titleText;
    return element;
}

let createTagline = () => {
    let element = document.createElement("p");
    element.setAttribute("id","tagline");
    element.innerHTML = taglineText;
    return element;
}

let createImage = () => {
    let element = document.createElement("img");
    element.setAttribute("src",imageSRC);
    element.setAttribute("id","header-img");
    return element;
}

let createTabNav = () => {
    let tabsDiv = document.createElement("div");
    tabsDiv.setAttribute("id","tabs-container");
    tabsDiv.appendChild(createTab("About"));
    tabsDiv.appendChild(createTab("Menu"));
    return tabsDiv;
}

let createTab = (tabName) => {
    let newTab = document.createElement("button");
    newTab.classList.add("tab");
    newTab.innerText = tabName;
    newTab.id = tabName;
    return newTab;
}

let createContentArea = () => {
    var contentArea = document.createElement("div");
    contentArea.setAttribute("id","content-area");
    return contentArea;
}
