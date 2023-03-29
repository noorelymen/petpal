import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArchiveLayout from '../../components/layouts/archive'
import Shop from  '../../components/shop'
import useFetch from "../../hooks/useFetch";

export default function ShopPage() {
  const params = useParams();
  const {data, error, loading} = useFetch(`/pets/category/${params.category}`)

  console.log("category page data")
  console.log(data)

  return (
    <ArchiveLayout>
        {/* <Shop /> */}

        <h1>CATEGORY PAGE</h1>
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
            </div>
          </div>
        )}
      </div>
      {!data  && <h1>No Pet data.</h1>}
      {error && <h1>Error: PetPage</h1>}
    </ArchiveLayout>
  )
}
