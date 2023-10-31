import svg from "../assets/delete.svg";
import type { Items, ReactSetState } from "../types/utils";
import Button from "./Button";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((element) => element.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
    >
      <p>{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <img src={svg} className="w-5 h-5" alt="" />
      </Button>
    </div>
  ));
};

export default ItemList;
