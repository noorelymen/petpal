import React from "react";
import { useNavigate } from "react-router-dom";
import "./pet.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBirthdayCake,
  faLocationDot,
  faPaw,
  faMarsAndVenus
} from "@fortawesome/free-solid-svg-icons";

export default function PetCard({ item }) {
  const navigate = useNavigate()
  return (
    <div className="pet-card" onClick={()=>navigate(`/pets/${item._id}`)}>
      <div className="pet-photo">
        <img src={item.photo} className="pet-card-image" alt={item.name} />
      </div>
      <div className="pet-details">
        <span className="pet-name">{item.name}</span>
        <span className="pet-notation">★★★★★</span>
        <div className="deets-row">
          <span className="breed"><FontAwesomeIcon className="faIcon" icon={faPaw} /> {item.breed}</span>
          <span className="gender"><FontAwesomeIcon className="faIcon" icon={faMarsAndVenus} /> {item.gender}</span>
        </div>
        <hr />
        <div className="deets-row">
            <span className="location"><FontAwesomeIcon className="faIcon" icon={faLocationDot} /> {item.city}</span>
            <span className="age"><FontAwesomeIcon className="faIcon" icon={faBirthdayCake} /> {item.age} yrs</span>
        </div>
        <div className="action-btns">
          <button className="details-btn btn" onClick={()=>navigate(`/pets/${item._id}`)}>Details</button>
          <button className="adopt-btn btn" onClick={()=>navigate(`/pets/${item._id}`)}>Adopt now</button>
        </div>
       </div>
    </div>
  );
}
