let optionsButtons = document.querySelectorAll("option-button");
let advancedOptionsButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fonSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
"Arial", 
"Verdana",
"Times New Roman", 
"Garamond", 
"Georgia", 
"Courier New", 
"cursirve"
];

const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);  
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);
};

const highlighter = (className, needsRemoval) => {
  className.array.forEach((button) => {
    button.addEventListener("click", () =>  {
      if(needsRemoval){
        let alreadyActive = false;

        if(button.classList.contains("active")){
          alreadyActive = true;
        }
        highlighterRemover(className);
        if(!alreadyActive){
          button.classList.add("active");
        }
      }
      else{
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) =>{
  className.forEach((button) => {
    button.classList.remove("active");
  });
};