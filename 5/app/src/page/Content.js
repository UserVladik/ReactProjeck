import React from "react";
import ReactDOM from "react-dom";

function tick () {
    const element = (
        <div>
            <h1>Часы</h1>
            <h2>Часы {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
    ReactDOM.render (element, document.getElementById ('root'))
}
setInterval(tick, 1000);


function Content() {
    return(
        <div>
            <h1>Страница - 2</h1>
        </div>
    )
}

export default Content