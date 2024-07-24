import React, { useState, useEffect } from 'react';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/projects/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error('Error fetching project details:', error));
    }
  }, [productId]);

  if (!product) {
    return <div>Loading project details...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* يمكنك إضافة المزيد من التفاصيل هنا */}
    </div>
  );
};

export default ProductDetail;