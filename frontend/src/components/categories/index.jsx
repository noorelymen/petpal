import React from 'react'
import "./categories.css"

const Categories = () => {
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
                <div className="category-card dogs">
                    <div className="category-title">
                        <h1>Dogs</h1>
                        <span>28 to adopt</span>
                    </div>
                </div>
                <div className="category-card cats">
                    <div className="category-title">
                        <h1>Cats</h1>
                        <span>43 to adopt</span>
                    </div>
                </div>
                <div className="category-card birds">
                    <div className="category-title">
                        <h1>Birds</h1>
                        <span>62 to adopt</span>
                    </div>
                </div>
                <div className="category-card other">
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