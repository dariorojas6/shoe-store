import React from "react";
import Logo from "../../360React/images/Nike.jpg"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <a href="#">
                    <img src={Logo} alt=""  width="150"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>

        </header>
    )
}