import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [categrories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchCategories() {
      const data = await fetch("https://dummyjson.com/products/categories");
      const res = await data.json();
      setCategories(res);
    }
    fetchCategories();
  }, []);

  function handleSelection() {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <Form.Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      aria-label="Default select example"
      style={{ cursor: "pointer" }}
      onClick={handleSelection}
    >
      {categrories.map((category) => (
        <option key={category.slug} value={category.slug}>
          {" "}
          {category.name}{" "}
        </option>
      ))}
    </Form.Select>
  );
};

export default Filter;
