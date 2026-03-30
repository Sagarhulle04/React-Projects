import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const res = await data.json();
      console.log(res);
    }
    fetchData();
  }, []);

  return <div>ProductDetails No : {id} </div>;
};

export default ProductDetails;
