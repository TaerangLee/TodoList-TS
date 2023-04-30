import { useState } from "react";
import { Item } from "../type/type";
import { v4 as uuid } from "uuid";

interface Props {
  items: Item[];

  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const InputItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState("");

  const ChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const ClickButton = () => {
    if (itemName === "") {
      //빈공간 확인하는
      alert("빈 공백입니다.");
      return;
    } else {
      setItems([...items, { itemId: uuid(), itemName, clear: false }]);

      setItemName("");
      console.log(itemName);
    }
  };

  return (
    <>
      <input
        className="task-input"
        type="text"
        value={itemName}
        onChange={ChangeItem}
      ></input>
      <button className="made" onClick={ClickButton}>{`만들기`}</button>
    </>
  );
};

export default InputItem;
