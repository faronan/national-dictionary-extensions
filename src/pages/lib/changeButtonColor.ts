export const changeButtonColor = () => {
  const changeColor = document.getElementById("changeColor");
  chrome.storage.sync.get("color", ({ color }) => {
    if(changeColor){
      changeColor.style.backgroundColor = color;
    }
  });
}