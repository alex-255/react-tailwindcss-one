import React from "react";

const Card = (props) => {
  return (
    <div
      className={
        props.selected === "true"
          ? "w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border"
          : "w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border "
      }
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={props.src}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{props.title}</h2>
      <p className="text-center text-4xl font-bold">{props.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{props.storage_text}</p>
        <p className="py-2 border-b mx-8">{props.users}</p>
        <p className="py-2 border-b mx-8">{props.bandwidth}</p>
      </div>
      <button
        className={
          props.selected === "true"
            ? "bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
            : "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
        }
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
