import React from 'react'
import ReactDOM from 'react-dom'
import type { NextPage } from 'next'

const Popup: NextPage = () => {
  const buttonStyle = {
    "height": "30px",
    "width": "30px"
  }
  return (
    <div>
      <main style={{ minWidth: "700px" }}>
        <button id="changeColor" style={buttonStyle}></button>
      </main>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

const changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("color", ({ color }) => {
  if(changeColor){
    changeColor.style.backgroundColor = color;
  }
});