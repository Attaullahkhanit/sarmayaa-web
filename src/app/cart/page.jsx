"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CartPage() {
    // const router = useRouter();
    // const { id } = router.query;
    // const [productData, setProductData] = useState(null);

    // useEffect(() => {
    //     const fetchData =async() => {
    //         try{
    //             const response = await fetch(`https://api.example.com/products/${id}`);
    //             const data = await response.json();
    //             setProductData(data)
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };
    //     if(id) {
    //         fetchData();
    //     }
    // },[id])

  return (
    <>
      <div className="w-full px-40 py-20">
        <Link href="/" className="cursor-pointer font-bold text-lg">
          Back
        </Link>
        <div className="flex flex-row pt-8 space-x-14">
          <div className="basis-2/4 align-middle">
            <div className="border-8 rounded-md shadow-lg">
              <img
                className="w-full"
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt="cardimg"
              />
            </div>
          </div>
          <div className="basis-4/4">
            <div className="flex-col space-y-4 justify-between items-start">
              <div>
                <h3 className="bold">Test Product</h3>
              </div>
              <div>
                <p className="text-slate-400">Category</p>
                <p>Electronic</p>
              </div>
              <div>
                <p className="text-slate-400">Description</p>
                <p>No description</p>
              </div>
              <div>
                <p>Price</p>
                <h4>$ 13.5</h4>
              </div>
              <div>
                <button className="w-full py-2 rounded-lg bg-black text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
