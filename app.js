let body = document.getElementById("body");
let title = document.getElementById("title");
let search =document.getElementById("search");
let month = document.getElementById("month");
let label = document.getElementById("label");

//Dark mode & Light mode  -  Function - start 

function DarkMode() {
    body.style.backgroundColor = "black";
    title.style.color = "White";
    search.style.style.borderColor = "#6c63ff";
    label.style.color = "white";
};

function LightMode() {
    body.style.backgroundColor = "white";
    title.style.color = "black";
    search.style.style.borderColor = "#6c63ff";
    label.style.color = "black";
};

// Dark mode & Light mode - Function - end

// Add note - Function - start
let send = document.getElementById("send");
let noteBox = document.getElementById("noteBox");
let h1 = document.getElementById("h1");


send.addEventListener("click", () => {
  localStorage.setItem("input_value", send.value);
noteBox.innerHTML +=  `

<div class='solo_note'>
          <div class="checkBox">
            <input type="checkbox" id="check" />
            <label>${localStorage.getItem("input_value")}</label>
          </div>
          <div class="noteIcons">
            <img src="./pencil.svg" alt="" />
            <img src="./trash.svg" alt="" />
          </div>

          </div>

`
});

