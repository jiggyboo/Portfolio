import React from "react";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div className="half">
                <scan className="half--title">I am:</scan>
                A Frontend-Backend Developer<br />
                (JS, REACTJS, HTML, CSS, PYTHON, MYSQL) <br />
                A CISCO Certified Network Associate <br />
                An Information Systems Graduate <br />
                IT Tech Support
            </div>
            <div className="half">
                <img src="/imgs/portrait.png" />
            </div>
        </div>
    )
}