import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Item } from "./type/type";
import ItemList from "./todoList/ItemList";
import InputItem from "./todoList/inputItem";

function App() {
  const saveItem = JSON.parse(localStorage.getItem("todos") || "[]");
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const [item, setItem] = useState<Item[]>([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>{`Todo List`}</h1>
        </div>
        <InputItem items={item} setItems={setItem} />
        <ItemList items={item} setItems={setItem} />
      </div>
    </div>
  );
}

export default App;
