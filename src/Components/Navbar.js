import React from "react"
import { FaGlobeAfrica } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav>
            <FaGlobeAfrica className="app-logo"/>
            <h1 className="nav__logo">MyTravelJournal</h1>
        </nav>
    )
}