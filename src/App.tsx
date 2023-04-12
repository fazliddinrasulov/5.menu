import { useState } from "react";
import "./App.css";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const tempCategories = menu.map((item) => {
    return item.category;
  });
  const unique = ["all", ...Array.from(new Set(tempCategories))];
  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(menu);
    } else {
      const filteredItems = menu.filter((item) => {
        return item.category === category;
      });
      setMenuItems(filteredItems);
    }
  };
  return (
    <main>
      <section className="menu">
        <Title title="our menu" />
        <div className="btn-container">
          {unique.map((item, index) => {
            return (
              <button className="btn" key={index} onClick={() => filterItems(item)}>
                {item}
              </button>
            );
          })}
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
