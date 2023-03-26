import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import BaseLayout from "../../components/layouts/base";
// import { petsData } from "../data";
import useFetch from "../../hooks/useFetch";

export default function PetPage() {
 
  const params = useParams();
  const {data, error, loading} = useFetch(`/pets/${params.id}`)

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event)=> {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <BaseLayout>
    <h1>PETPAGE</h1>
      <div className="pet-details-wrapper">
        {loading && <h1>Loading ...</h1>}
        {data && data.pet && (
          <div>
            <div>
              <div>
                <img
                  src={data.pet.photo}
                  alt={data.pet.name}
                  height="300"
                />
                <h2>{data.pet.name}</h2>
                <p>
                  <b>Category:</b> {data.pet.category}
                </p>
                <p>
                  <b>Breed:</b> {data.pet.breed}
                </p>
                <p>
                  <b>Description:</b> <br /> {data.pet.desc}
                </p>
                <p>
                  <b>Qualities:</b> <br /> {data.pet.qualities}
                </p>
              </div>
            </div>
            <div>
              <YouTube
                videoId={data.pet.video}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          </div>
        )}
      </div>
      {!data  && <h1>No Pet data.</h1>}
      {error && <h1>Error: PetPage</h1>}
    </BaseLayout>
  );
}
