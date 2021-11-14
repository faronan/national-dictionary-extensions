import React from 'react'
import ReactDOM from 'react-dom'
import type { NextPage } from 'next'

const Popup: NextPage = () => {
  return (
    <div>
      <main>
        <button id="changeColor"></button>
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
