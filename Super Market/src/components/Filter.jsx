import React, { useEffect } from "react";

const Filter = () => {
  useEffect(() => {
    async function fetchCategories() {
      const data = await fetch("https://dummyjson.com/products/categories");
      const res = await data.json();
      console.log(res);
    }
    fetchCategories();
  }, []);

  return <div>Filter</div>;
};

export default Filter;
