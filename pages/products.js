// pages/products.js
import { useState } from 'react';

const products = [
  { title: 'Arduino Uno', description: 'Perfect for your embedded projects.' },
  { title: 'Resistors (100 pcs)', description: 'Various ratings available.' },
  { title: 'Capacitors Kit', description: 'Electrolytic, ceramic, and more.' },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div className="products-page">
      <h2>All Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
