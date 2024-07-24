
import React, { useEffect, useState } from 'react';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
        console.log('Fetched categories:', data);
      });
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div
          key={category.id || index} 
          className="category-item"
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;