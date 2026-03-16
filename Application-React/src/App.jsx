import React from "react";
import Cards from "./components/Card";
import Todo from "./components/Todo";
import ComponentA from "./components/ComponentA";

const items = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKk9JmPJZsXo7AmWJN7sKVHHqPcahsD9NqXA&s",
    caption: "an apple a day keeps a doctor away",
  },
  {
    id: 2,
    name: "Orange",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s",
    caption: "an orange a day keeps a doctor away",
  },
  {
    id: 3,
    name: "Mango",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/732/173/small/mango-fruit-hanging-on-a-tree-with-a-rustic-wooden-table-free-photo.jpg",
    caption: "an mango a day keeps a doctor away",
  },
];

const App = () => {
  return (
    <div>
      <div style={{ height: "90vh", backgroundColor: "red" }}>
        <ComponentA name="Roonie" />
      </div>

      {/* App */}
      <section className="px-4 mt-4 d-flex flex-wrap gap-4 align-items-center">
        {items.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </section>
      <Todo />
    </div>
  );
};

export default App;
