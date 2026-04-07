import axios from "axios";
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [update, setUpdate] = useState(false);

  async function submitData(e) {
    e.preventDefault();
    if (!name || !image || !price) {
      alert("Enter all the fields");
      return;
    }
    await axios.post(
      "https://69d33482336103955f8ea792.mockapi.io/yes/addFlower",
      { name, price, image },
    );
    alert("Flower added successfully");
    setName("");
    setImage("");
    setPrice("");
  }

  function handleUpdate() {
    setUpdate(!update);
  }

  return (
    <ProductContext.Provider
      value={{
        name,
        setName,
        image,
        setImage,
        price,
        setPrice,
        submitData,
        update,
        setUpdate,
        handleUpdate,
      }}
    >
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    console.log("Product context was used outside the product provider ");

  return context;
}

export { useProduct, ProductProvider };
