"use client";
import { useState } from "react";
import "./style.css"
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button className="Add-button" onClick={openModal}>add</button>
      {isOpen && (
        <div
        >
          <div
            style={{
              height: 500,
              width: 800,
              backgroundColor: "gray",
              borderRadius: 16,
              margin: "auto",
              padding: 48,color:"pink"
            }}
          >
            <button onClick={closeModal}>X</button>
            <input
              style={{
                border:"2px solid black",
                width: 256,
                height: 56,
                border: "1px solid black",
                padding: 4,
                color:"black"
              }}
              placeholder="task"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}
