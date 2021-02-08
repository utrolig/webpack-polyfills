import React from "react";
import ReactDOM from "react-dom";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const Comp = () => <div>Test</div>;

    await delay(500);

    ReactDOM.render(<Comp />, document.getElementById("root"));
})();
