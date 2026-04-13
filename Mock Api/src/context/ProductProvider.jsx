import axios from "axios";
import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [update, setUpdate] = useState(false);

  async function submitData(e, formData) {
    e.preventDefault();

    const { name, price, image } = formData;

    await axios.post(
      "https://69d33482336103955f8ea792.mockapi.io/yes/addFlower",
      { name, price, image },
    );

    alert("Flower added successfully");
  }

  function handleUpdate() {
    setUpdate(!update);
  }

  return (
    <ProductContext.Provider
      value={{
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
