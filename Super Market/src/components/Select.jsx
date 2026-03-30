import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";

function SelectBasicExample() {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelection() {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <Form.Select
      aria-label="Default select example"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ cursor: "pointer" }}
      onClick={handleSelection}
    >
      <option value="sort-by-price-asc">Sort By Price (Asc) </option>
      <option value="sort-by-price-desc">Sort By Price (Desc) </option>
    </Form.Select>
  );
}

export default SelectBasicExample;
