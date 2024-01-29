"use client";
import { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import '../../globals.css'
import Link from 'next/link';

const ProductCard = ({ product }) => {
  // Destructure properties from the product object with default values
  const {image = 'unknown', title = 'Unknown', category = 'Unknown', description = 'No description', price = 0, router= 'unkown' } = product;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-md mx-auto w-full items-stretch m-2 bg-white rounded-md shadow-lg product-card">
      <div className="rounded-md bg-white">
        <img
            className="w-full h-48 p-2 rounded-sm object-cover"
            src={image}
            alt="Card Top"
        />
      </div>
      <div className="p-2">
        <p className="text-xl font-semibold mb-1">{title}</p>
        <p className="text-gray-600 mb-2">{category}</p>
        {showFullDescription ? (
          <p className="text-gray-700 mb-2">{description}</p>
        ) : (
          <p className="text-gray-700 mb-3 h-24 overflow-hidden">{description}</p>
        )}
        {description.length > 30 && (
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleDescription}
          >
            {showFullDescription ? 'See Less' : 'See More'}
          </button>
        )}
        <p className="text-gray-700 mb-2">Price: ${price.toFixed(2)}</p>
        <Link href="/cart" passHref className="flex py-4 items-center justify-center w-full bg-black text-white rounded-md hover:bg-black">
          Add To Cart <RiShoppingCartLine className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
