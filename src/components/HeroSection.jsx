import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-header">
        <h1>Explore AI-PAMSCO</h1>
        <p>Buyers & Sellers Marketplace</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for produce by name..."
          className="search-input"
        />
        <button className="search-button">Search</button>
        <a href="/marketplace" className="cta-button">
          Browse Marketplace
        </a>
      </div>
      <section className="featured-products">
        <h2>Available Produce</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://mlk6yeqyz9sr.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://farmnorthgh.com/wp-content/uploads/2024/06/Maiz.jpg"
              alt="Maize"
              className="product-image"
            />
            <h3>Maize</h3>
            <p>Ksh 30 per kg</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
          <div className="product-card">
            <img
              src="https://insanelygoodrecipes.com/wp-content/uploads/2023/03/Different-Types-of-Beans-Including-Cannellini-Pinto-and-Kidney.jpg"
              alt="Beans"
              className="product-image"
            />
            <h3>Beans</h3>
            <p>Ksh 90 per kg</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

// import React, { useState, useEffect } from "react";
// import "../styles/HeroSection.css";

// function HeroSection() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Simulating an API call (Replace this with your backend URL)
//     fetch("http://localhost:5000/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   // Filter products based on search input
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="hero">
//       <div className="hero-header">
//         <h1>Explore AI-PAMSCO</h1>
//         <p>Buyers & Sellers Marketplace</p>
//       </div>
      
//       {/* Search Bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for produce by name..."
//           className="search-input"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button className="search-button">Search</button>
//         <a href="/marketplace" className="cta-button">
//           Browse Marketplace
//         </a>
//       </div>

//       {/* Product Listings */}
//       <section className="featured-products">
//         <h2>Available Produce</h2>
//         <div className="product-grid">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image"
//                 />
//                 <h3>{product.name}</h3>
//                 <p>Ksh {product.price} per kg</p>
//                 <button className="add-to-cart-button">Add to Cart</button>
//               </div>
//             ))
//           ) : (
//             <p>No products found</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HeroSection;





