export const changeButtonColor = () => {
  const changeColor = document.getElementById("changeColor");
  chrome.storage.sync.get("color", ({ color }) => {
    if(changeColor){
      changeColor.style.backgroundColor = color;
    }
  });

  const text = document.getElementById("text");
  chrome.storage.local.get("selectionString", ({ selectionString }) => {
    if(text){
      text.innerText = selectionString
    }
    changeColor!.addEventListener('click', ()=>alert(selectionString));
  });
}

export const changeText = () => {
  const text = document.getElementById("text");
  chrome.storage.local.get("selectionString", ({ selectionString }) => {
    if(text){
      text.innerText = selectionString
    }
  });
}