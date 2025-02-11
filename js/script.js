// Get DOM elements
const input = document.getElementById("number"),
    convert = document.getElementById("convert-btn"),
    output = document.getElementById("output"),
    toggleFeaturesBtn = document.getElementById("toggle-features"),
    features = document.querySelector(".features");

// Roman numeral mapping
const numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];

// Function to convert number to Roman numeral
function convertToRoman(value) {
    let result = "";
    for (const [roman, number] of numerals) {
        while (value >= number) {
            result += roman;
            value -= number;
        }
    }
    return result;
}

// Function to handle conversion
function handleConversion() {
    let value = parseInt(input.value, 10);
    if (isNaN(value)) {
        output.innerText = "Please enter a valid number.";
        output.style.color = "#ed8574";
        output.style.fontSize = "large";
    } else if (value <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1.";
        output.style.color = "#ed8574";
        output.style.fontSize = "large";
    } else if (value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999.";
        output.style.color = "#ed8574";
        output.style.fontSize = "large";
    } else {
        output.innerText = convertToRoman(value);
        output.style.color = "#ef8b09";
        output.style.fontSize = "2rem";
    }
}

// Add event listener for Enter key press
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convert.click();
    }
});

// Add event listener for Convert button click
convert.addEventListener("click", handleConversion);

// Add event listener for Toggle Features button click
toggleFeaturesBtn.addEventListener("click", function () {
    if (features.style.display === "none" || features.style.display === "") {
        features.style.display = "block";
        this.textContent = "Hide Features";
    } else {
        features.style.display = "none";
        this.textContent = "Show Features";
    }
});
