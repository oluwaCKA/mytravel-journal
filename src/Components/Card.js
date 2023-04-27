import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Card(props) {
    return(
        <div className="card">
            <img src={`/Assets/Images/${props.cardImg}`} className="card-img"/>
            <div className="info">
                <div className="card-location">
                    <FaMapMarkerAlt className="location-icon" />
                    <h3 className="location">{props.location}</h3>
                    <a href={props.googleMaps} className="url">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dates.start} - {props.dates.end}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
} 