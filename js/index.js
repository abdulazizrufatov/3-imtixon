let elList = document.querySelector(".list");

for (let pokemon of pokemons) {
  // CREATE
  let newItem = document.createElement("li");
  let newImg = document.createElement("img");
  let newItemBox = document.createElement("div");
  let newHeartIcon = document.createElement("img");
  let newName = document.createElement("p");
  let newType = document.createElement("p");
  let newBottomBox = document.createElement("div");
  let newWeight = document.createElement("p");
  let newHeight = document.createElement("p");

  // SET ATTRIBUTE
  newItem.setAttribute(
    "class",
    "pokemon-item d-flex flex-column align-content-center pt-3"
  );
  newImg.setAttribute("class", "item-photo mx-auto mb-5");
  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("alt", "pokemon photo");
  newItemBox.setAttribute(
    "class",
    "item-body position-relative w-100 pt-3 pe-4 pb-3 ps-4"
  );
  newHeartIcon.setAttribute("class", "item-heart position-absolute");
  newHeartIcon.setAttribute("src", "./images/icon.svg");
  newHeartIcon.setAttribute("alt", "heart-icon");
  newHeartIcon.setAttribute("width", "30");
  newHeartIcon.setAttribute("height", "30");
  newName.setAttribute("class", "item-name p-0 mb-1 fw-bolder fs-2");
  newType.setAttribute("class", "item-type fw-semibold fs-4");
  newBottomBox.setAttribute("class", "item-bottom d-flex");
  newWeight.setAttribute("class", "item-weight fw-bolder fs-2");
  newHeight.setAttribute("class", "item-height fw-bolder fs-2 ms-3");

  // STYLE
  // item
  newItem.style.width = "310px";
  newItem.style.border = "2px solid black";
  newItem.style.background = "white";
  newItem.style.borderRadius = "20px";
  // newItem.style.paddingTop = "30px";
  // newItem.style.height = "14px";

  // icon
  newHeartIcon.style.top = "21px";
  newHeartIcon.style.right = "30px";

  // img
  newImg.style.width = "157px";
  //  box
  newItemBox.style.borderTop = "2px solid black";

  newName.textContent = pokemon.name;
  newType.textContent = pokemon.type;
  newWeight.textContent = pokemon.weight;
  newHeight.textContent = pokemon.height;
  // APPEND
  elList.appendChild(newItem);
  newItem.appendChild(newImg);
  newItem.appendChild(newItemBox);
  newItemBox.appendChild(newHeartIcon);
  newItemBox.appendChild(newName);
  newItemBox.appendChild(newType);
  newItemBox.appendChild(newBottomBox);
  newBottomBox.appendChild(newWeight);
  newBottomBox.appendChild(newHeight);
}
