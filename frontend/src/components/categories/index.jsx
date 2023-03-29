import React from 'react'
import { useNavigate } from "react-router-dom";
import "./categories.css"

const Categories = () => {
  const navigate = useNavigate()
  return (
    <div className="section categories">
        <div className="container">
            <h2 className="section-subtitle">
              Our categories
            </h2>
            <h1 className="section-title">
                Browse by category
            </h1>
            <div className="category-cards">
                <div className="category-card dogs" onClick={()=>navigate(`/pets/category/dogs`)}>
                    <div className="category-title">
                        <h1>Dogs</h1>
                        <span>28 to adopt</span>
                    </div>
                </div>
                <div className="category-card cats" onClick={()=>navigate(`/pets/category/cats`)}>
                    <div className="category-title">
                        <h1>Cats</h1>
                        <span>43 to adopt</span>
                    </div>
                </div>
                <div className="category-card birds" onClick={()=>navigate(`/pets/category/birds`)}>
                    <div className="category-title">
                        <h1>Birds</h1>
                        <span>62 to adopt</span>
                    </div>
                </div>
                <div className="category-card other" onClick={()=>navigate(`/pets/category/other`)}>
                    <div className="category-title">
                        <h1>Other</h1>
                        <span>55 to adopt</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories;