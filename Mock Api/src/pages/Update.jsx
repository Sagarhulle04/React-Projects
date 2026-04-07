import React, { useEffect, useState } from "react";
import Forms from "../components/Forms";
import { useParams } from "react-router-dom";
import axios from "axios";
import UpdateForm from "../components/UpdateForm";

const Update = () => {
  const { id } = useParams();
  console.log(id);

  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://69d33482336103955f8ea792.mockapi.io/yes/addFlower/${id}`,
      );
      const response = await res.data;
      setFlowers(response);
    }
    getData();
  }, [id]);

  console.log(flowers);

  if (flowers.length == 0) return;

  return (
    <div>
      <UpdateForm flowers={flowers} />
    </div>
  );
};

export default Update;
