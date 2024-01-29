"use client";
import { useEffect, useState } from "react";
import getAllProduct from "@/app/api/getAllProduct";
import ProductCard from "@/app/components/productcard/ProductCard";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const apiData = await getAllProduct();
      setData(apiData);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "dataaaa");

  const renderRows = () => {
    const maxRows = 2; // Set the maximum number of rows
    const maxCardsPerRow = 4;

    return Array.from({ length: Math.min(maxRows, Math.ceil(data.length / maxCardsPerRow)) }, (_, i) => {
      const rowProducts = data.slice(i * maxCardsPerRow, (i + 1) * maxCardsPerRow);
      return (
        <div
          key={i}
          className="w-full bg-white px-20 py-8 flex space-x-8 flex-row justify-around items-stretch"
        >
          {rowProducts.map((product, index) => (
            <div key={index} className="flex-1">
              <ProductCard product={product}/>
            </div>
          ))}
        </div>
      );
    });
  };

  return <>{renderRows()}</>;
}
