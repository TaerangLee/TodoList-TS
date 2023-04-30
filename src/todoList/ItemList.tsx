import { Item } from "../type/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const ClickDelete = (data: Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const ClickSuccess = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <>
      <ul>
        {items.map((data: Item) => {
          return (
            <li className="list-item" key={data.itemId}>
              <p className={data.clear ? `success` : ``}>{data.itemName}</p>
              <div>
                <button
                  className="button-delete"
                  onClick={() => ClickDelete(data)}
                >{`삭제`}</button>
                <button
                  className="button-success"
                  onClick={() => ClickSuccess(data)}
                >{`성공`}</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemList;
