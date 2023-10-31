import "./App.css";
import ImageHeader from "./components/ImageHeader";
import svg from "./assets/delete.svg";
import { useState } from "react";

type Items = {
  id: string;
  title: string;
};

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [
      ...prev,
      { id: Date.now().toString(), title: inputValue },
    ]);
    setInputValue("");
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-8" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="w-full p-2 mb-2 rounded-sm"
          />
          <button className="bg-gray-700 w-full py-2">Add</button>
        </form>
        <div className="h-52 overflow-y-auto">
          {items.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
            >
              <p>{data.title}</p>
              <button onClick={() => handleDelete(data.id)}>
                <img src={svg} className="w-5 h-5" alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
