"use client"


import ProductCard from "./ProductCard"
import "./ProductList.css"
import LogoRiham from "../assets/LogoRiham.png"

function ProductList({ products, loading }) {



    return (
        <section id="products" className="product-list-section">
            <h2>Notre sélection de produits</h2>
            <p className="section-description">
                Une gamme soigneusement choisie de produits de beauté, alliant qualité, efficacité et respect de votre peau.
            </p>



            {loading ? (
                <div style={{ width: '300px',margin:"auto" }}>
                    <img src={LogoRiham} alt="" style={{ width: '100%' }} />
                </div>

            ) : (
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => <ProductCard key={product.title} product={product} />)
                    ) : (
                        <p className="no-products">No products found in this category.</p>
                    )}
                </div>
            )}
        </section>
    )
}

export default ProductList
