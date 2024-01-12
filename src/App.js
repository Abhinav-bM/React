import React, { useState, useMemo } from "react";

const ItemList = ({ items, searchTerm }) => {
  // Expensive function: Filtering items based on search term
  const filterItems = (items, term) => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
  };

  // Memoizing the filtered items using useMemo
  const filteredItems = useMemo(
    () => filterItems(items, searchTerm),
    [items, searchTerm]
  );

  return (
    <div>
      <h2>Filtered Items</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <div>
      <h1>React useMemo Example</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ItemList items={items} searchTerm={searchTerm} />
    </div>
  );
};

export default App;