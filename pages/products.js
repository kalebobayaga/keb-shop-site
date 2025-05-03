// pages/products.js
import { useRouter } from 'next/router';

const products = [
  { title: 'Arduino Uno', image: '/images/arduino.jpg', price: '$25.00', description: 'ATmega328P microcontroller board.' },
  { title: 'Relay Module', image: '/images/relay.jpg', price: '$3.00', description: '5V/10A relay module.' },
  { title: 'Proximity Sensor', image: '/images/proximity.jpg', price: '$6.00', description: 'Inductive sensor for metal detection.' },
  { title: 'MCB 6A', image: '/images/mcb.jpg', price: '$4.00', description: 'Miniature circuit breaker 6A.' },
  { title: 'PLC Controller', image: '/images/plc.jpg', price: '$150.00', description: 'Programmable logic controller for automation.' },
];

export default function ProductsPage() {
  const router = useRouter();
  const searchQuery = router.query.search?.toLowerCase() || '';

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="products-page">
      <h2>All Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
