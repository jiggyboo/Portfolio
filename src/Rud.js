import React from "react";

export default function Rud() {
    return (
        <div className="RUD">
            <div className="half rud--pictures">
                <img className="rud--picture" style={{height: "262.5px", position: "absolute", top: "57vh", left: "16vw"}} src="/imgs/RUD Desktop.png" />
                <img className="rud--picture" style={{height: "262.5px", position: "absolute", top: "71vh", left: "29vw"}} src="/imgs/RUD Mobile1.png" />
                <img className="rud--picture" style={{height: "262.5px", position: "absolute", top: "71vh", left: "35vw"}} src="/imgs/RUD Mobile2.png" />
                <img className="rud--picture" style={{height: "262.5px", position: "absolute", top: "71vh", left: "41vw"}} src="/imgs/RUD Mobile3.png" />
            </div>
            <div className="half">
                <span className="half--title">RUD</span>
                <span className="half--subtitle">Reddit URL Downloader</span>
                <span className="half--quote">"I wish I can scrape reddit media quickly and easily!"</span>
                <span className="half--description">With AWS EC2 Backend, Python3, Flask, and MySQL, RUD is a web application that allows users to download content from reddit, with the power of PRAW.
                The content is downloaded as a .txt file, and the user can choose to download the file with a seperate downloader.
                </span>
            </div>
        </div>
    )
}