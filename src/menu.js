export const display = (selector) => {
    return createDiv(selector);
}

let menu = [
    {
        name: "Pizza",
        desc: "Whole pie only.  Cheese, pepperoni, white, veggie, or whatever special we're cooking up right now.",
        price: "$$$",
        type: "entree",
    },
    {
        name: "Sando",
        desc: "A free for all. Your choice of bread, meat, cheese, and toppings. You name it we make it.",
        price: "$$",
        type: "entree",
    },
    {
        name: "Milk & cookies",
        desc: "The cat's pajamas. You didn't know you wanted these until you smelled them pass by the table.",
        price: "$",
        type: "dessert",
    }
]

let createDiv = (selector) => {
    for(var i = 0; i < menu.length; i++){
        document.querySelector(selector).appendChild(createMenuItem(i));
    }
    return createDiv;
}

let createMenuItem = (menuIndex) => {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item-div");

    let itemName = document.createElement("p");
    itemName.classList.add("menu-item-name","menu-item-text");
    itemName.innerText = menu[menuIndex].name;
    itemDiv.appendChild(itemName);

    let descRow = document.createElement("div");
    descRow.classList.add("menu-item-desc-row");
    itemDiv.appendChild(descRow);

    let itemDesc = document.createElement("span")
    itemDesc.classList.add("menu-item-desc","menu-item-text");
    itemDesc.innerText = menu[menuIndex].desc;
    descRow.appendChild(itemDesc)

    let itemPrice = document.createElement("span")
    itemPrice.classList.add("menu-item-price","menu-item-text");
    itemPrice.innerText = menu[menuIndex].price;
    descRow.appendChild(itemPrice)

    return itemDiv;
}
