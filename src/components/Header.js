import React from "react";
import { useLocation } from 'react-router-dom'
import "./css/header.css";

export default ({ black }) => {
    const location = useLocation();
    let url = location.pathname;
    let imgUserHeader = "http://pngimg.com/uploads/netflix/netflix_PNG8.png";
    if (url != "/login" && url != "/login/") {
        imgUserHeader = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    }

    return (
        <header className={black ? "black" : ""}>
            <div className="header-logo">
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                        alt="Netflix"
                    />
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img
                        src={imgUserHeader}
                        alt="Utilisateur"
                    />
                </a>
            </div>
        </header>
    );
};
