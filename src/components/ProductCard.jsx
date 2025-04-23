"use client"

import { useState } from "react"
import "./ProductCard.css"

function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const sendToWhatsapp = () => {
    const phoneNumber = "212629066520";
    const message = `Découvrez ce produit : ${product?.title} - ${product?.price} \n ${product?.image}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product?.image|| "/placeholder.svg"} alt={product?.title} />
        {product.handmade && <span className="handmade-badge">Handmade</span>}
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        {/* <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p> */}

        <button className="details-toggle" onClick={toggleDetails} aria-expanded={showDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="product-details">
            <p>{product?.description}</p>
          </div>
        )}

        <button className="add-to-cart" onClick={sendToWhatsapp}>Whatssap</button>
      </div>
    </div>
  )
}

export default ProductCard
