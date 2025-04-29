import React from "react";

const cardData = [
  {
    title: "RSS Feed",
    desc1: "Lorem ipsum dolor sit.",
    desc2: "Dolor lorem sit.",
    imgSrc: "/Feed.svg",
  },
  {
    title: "YouTube Video",
    desc1: "Lorem ipsum dolor sit.",
    desc2: "Dolor lorem sit.",
    imgSrc: "/Youtube.svg",
  },
  {
    title: "Upload Files",
    desc1: "Lorem ipsum dolor sit.",
    desc2: "Dolor lorem sit.",
    imgSrc: "/Upload.svg",
  },
];

const AddPodcastCards = ({ onPinClick, setUploadOpen }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
      {cardData.map((card) => (
        <div
          onClick={()=> setUploadOpen(true)}
          key={card.title}
          className="bg-white rounded-lg shadow p-4 flex justify-between items-start hover:shadow-md transition"
        >
          <div className="flex flex-col space-y-1 text-start">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.desc1}</p>
            <p className="text-sm text-gray-600">{card.desc2}</p>
          </div>

          <div className="relative w-24 h-24">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="object-cover w-full h-full rounded"
            />
            <button
              onClick={() => onPinClick && onPinClick(card.title)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition"
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddPodcastCards;
