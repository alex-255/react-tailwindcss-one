import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          src={Single}
          title="Single User"
          price="$149"
          storage_text="500 GB Stograge"
          users="1 Granted User"
          bandwidth="Send up to 2 GB"
          selected="false"
        />
        <Card
          src={Double}
          title="Single User"
          price="$149"
          storage_text="500 GB Stograge"
          users="1 Granted User"
          bandwidth="Send up to 2 GB"
          selected="true"
        />
        <Card
          src={Triple}
          title="Single User"
          price="$149"
          storage_text="500 GB Stograge"
          users="1 Granted User"
          bandwidth="Send up to 2 GB"
          selected="false"
        />
      </div>
    </div>
  );
};

export default Cards;
