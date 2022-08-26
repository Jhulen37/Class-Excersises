
    // Selects the first <h1> element
    const headingOne = document.querySelector("h1");

    // Selects the element with the class name "heading-two"
    const headingTwo = document.querySelector(".heading-two");

    // Selects the body element
    const bodyEl = document.querySelector("body")

    // Changes "headingOne" variable's text content.
    headingOne.innerText = "Updated from Javascript!";

    // Changes "headingTwo" variable's text color.
    headingTwo.style.color = "#134e4a"

    // Changes the background of the body and the text color
    function updateColors() {
       bodyEl.style.backgroundColor = "#0c4a6e";
       headingOne.style.color = "#f0f9ff";
       headingTwo.style.color = "#7dd3fc";
    }
