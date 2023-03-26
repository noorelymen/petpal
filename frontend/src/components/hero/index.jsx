import React from 'react';
import img  from "../../assets/dog-6.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import './hero.css'

const Hero = () => {
  return (
    <div className="section hero">
        <div className="container">
          <div className="column left">
            <h2 className="subtitle">
              Save a life, adopt a pet!
            </h2>
            <h1 className="title">
              Find your <br/> furry friend
            </h1>
            <p className="description">
              Browse our adoptable pets and find your new loyal companion. 
              Join the thousands of happy pet owners who found their PetPal.
            </p>
            <button className="button">
              Browse our pets 
              <FontAwesomeIcon className="button-icon" icon={faPaw} />
            </button>
          </div>
          <div className="column right">
            <img src={img} alt="" />
            <div className="counter-box">
              <h2 className="counter-number">+450</h2>
              <p className="counter-title">Happy owners</p>
            </div>

            <div className="counter-box">
              <h2 className="counter-number">+520</h2>
              <p className="counter-title">Rescued pets</p>
            </div>
          </div>  
        </div>  
    </div>
  )
}

export default Hero;
