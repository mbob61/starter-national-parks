const classValue = document.querySelector(".value");
console.log(classValue);

const buttonType = document.querySelector("button");
console.log(buttonType);

//Containing Area
const areaClass = document.querySelector("[class*='area']");
console.log(areaClass);

// Starting with Area
const areaClass2 = document.querySelector("[class^='area']");
console.log(areaClass2);

// Ending with Area
const areaClass3 = document.querySelector("[class$='area']");
console.log(areaClass3);

const childSelector = document.querySelector(".stat > div");
console.log(childSelector);

const buttons = document.querySelectorAll("button");
console.log(buttons);

const heading3List = document.querySelectorAll("h3");
// for (let element of heading3List.values()) {
//     console.log(element);
// }

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
// }

const ratingsDivs = document.querySelectorAll("div [class*='rating']")
for (let element of ratingsDivs.values()) {
    console.log(element);
}


// Update the text for descriptions longer than 250 characters.
const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
//     if (content.length > 250) {
//         content = content.slice(0, 250);
//         content = content + "...";
//       }
    
//       desc.innerText = content;
//   }

// Update the HTML for the description (allows us to add an a tag to make the ... clickable.)
for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }

//   // Update the style for a rating above 4.7
// const ratings = document.querySelectorAll(".rating-display .value");
// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
//     if (ratingValue > 4.7) {
//         // rating.style.fontWeight = "bold";
//         // rating.style.color = "#3ba17c";
//         rating.classList.add("high-rating");
//         rating.classList.remove("value");
//       }
//   }


// const firstBtn = document.querySelector("button");
// firstBtn.addEventListener("click", (event) => {
//   console.log("You've clicked the button", event.target);
// });

const allButtons = document.querySelectorAll("button");
allButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    console.log(park);
    park.style.backgroundColor = "#c8e6c9";
  })
})

// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for sorting by name
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(parkA.querySelector(".stats .rating-display .value").innerText);
  const parkBRating = parseFloat(parkB.querySelector(".stats .rating-display .value").innerText);
  if (parkARating < parkBRating) {
    return -1;
  } else if (parkARating > parkBRating) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
}

const main = () => {
  const nameSorter = document.querySelector("#name-sorter");
  const ratingSorter = document.querySelector("#rating-sorter");
  
  nameSorter.addEventListener("click", nameSorterClickHandler);
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
  
}

window.addEventListener("DOMContentLoaded", main);