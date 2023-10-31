import "./App.css";
import ImageHeader from "./components/ImageHeader";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { type Items } from "./types/utils";
import ItemList from "./components/ItemList";

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

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-8" onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className="bg-gray-700 w-full py-2">Add</Button>
        </form>
        <div className="h-52 overflow-y-auto">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
