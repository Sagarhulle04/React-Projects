import React, { useEffect, useState } from "react";
import Forms from "../components/Forms";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  console.log(id);

  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    async function getUpdateData() {
      const res = await axios.put(
        `https://69d33482336103955f8ea792.mockapi.io/yes/addFlower/${id}`,
      );
      setFlowers(res.data);
    }
    getUpdateData();
  }, [id]);

  if (flowers.length == 0) return;

  return (
    <div>
      <Forms flowers={flowers} />
    </div>
  );
};

export default Update;
