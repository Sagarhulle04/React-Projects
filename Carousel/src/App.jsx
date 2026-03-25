import React, { useState } from "react";

const App = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/apple-colorful-vector-design_341269-1123.jpg",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/png-vector/20250303/ourmid/pngtree-ripe-mango-fruit-with-leaf-for-healthy-snack-png-image_15699037.png",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/169941852/photo/sapodilla-fruit.jpg?s=612x612&w=0&k=20&c=f15h4ecGCcB_5KaYECxzDFcp3CJXGqNyY0xt0qVNWC4=",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/fresh-red-strawberry-dark-surface-close-up_114579-34159.jpg?semt=ais_rp_50_assets&w=740&q=80",
    },
  ]);

  let [imageKey, setImageKey] = useState(0);

  function prev() {
    imageKey === 0 ? setImageKey(images.length - 1) : setImageKey(imageKey - 1);
  }

  function next() {
    imageKey === images.length - 1 ? setImageKey(0) : setImageKey(imageKey + 1);
  }

  return (
    <div>
      <img src={images[imageKey].image} alt="" />
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </div>
  );
};

export default App;
