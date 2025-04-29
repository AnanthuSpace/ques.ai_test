import React from "react";

const PodcastList = ({ podcasts, setPodcasts }) => {
  const handleView = (id) => {
    console.log(`Viewing podcast ${id}`);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this podcast?"
    );
    if (confirmed) {
      const updatedPodcasts = podcasts.filter((podcast) => podcast.id !== id);
      setPodcasts(updatedPodcasts);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-10 pb-5 bg-white shadow rounded-lg cursor-pointer mt-6">
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-bold my-4">Your Files</h2>

        <div className="bg-gray-100 rounded-md grid grid-cols-4 py-2 px-4 mb-2">
          <div className="font-medium text-gray-700">No.</div>
          <div className="font-medium text-gray-700">Name</div>
          <div className="font-medium text-gray-700">Upload Date & Time</div>
          <div className="font-medium text-gray-700 text-right">Action</div>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="grid grid-cols-4 py-4 px-4 items-center"
          >
            <div className="text-gray-700">{podcast.id}</div>
            <div className="text-gray-700 font-medium">{podcast.name}</div>
            <div className="text-gray-700">{`${podcast.uploadDate} | ${podcast.uploadTime}`}</div>
            <div className="flex justify-end">
              <button
                onClick={() => handleView(podcast.id)}
                className="px-4 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                View
              </button>
              <button
                onClick={() => handleDelete(podcast.id)}
                className="px-4 py-1 border border-red-300 rounded-md text-red-500 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;
