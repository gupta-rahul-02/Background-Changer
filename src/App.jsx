import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const colorsList = ["red", "green", "yellow", "orange", "black", "purple", "brown", "pink", "violet" , "blue", "indigo"];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2 ml-[20rem]">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-lg">
            {colorsList.map((color) => {
              return (
                <button
                  className="outline-none px-4 py-1 rounded-full text-white"
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
