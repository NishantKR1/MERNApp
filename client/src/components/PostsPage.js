import { useEffect, useState } from 'react';
import axios from 'axios';
import './PostsPage.css';

function PostsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log('API Response:', response.data);
        setProducts(response.data.products); // Store the fetched data
        setLoading(false);
      })
      .catch(error => {
        alert('Api error');
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Products List</h1>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} className="card-image" />   {/* 🖼️ Add this line */}
            <h2 className="card-title">{product.title}</h2>
            <p className="card-description">{product.description}</p>
            <p className="card-price">Price: ${product.price}</p>
            <div className="rating">
              {"★".repeat(Math.round(product.rating))} {/* Rating stars */}
            </div>
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
