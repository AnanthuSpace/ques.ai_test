import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import AddPodcastCards from "../components/AddPodcastCards";
import UploadModal from "../components/UploadModal";
import PodcastList from "../components/PodcastList";
import { useLocation } from "react-router-dom";
import LogoutIcone from "../components/LogoutIcone";

const defaultPodcasts = [
  {
    id: 1,
    name: "THE SIDEPOD S2 EPISODE 15",
    uploadDate: "25 Oct 23",
    uploadTime: "09:04",
  },
  {
    id: 2,
    name: "THE SIDEPOD S2 EPISODE 17",
    uploadDate: "27 Oct 23",
    uploadTime: "11:08",
  },
  {
    id: 3,
    name: "THE SIDEPOD S2 EPISODE 20",
    uploadDate: "31 Oct 23",
    uploadTime: "20:28",
  },
];

const AddPodcastPage = () => {
  const location = useLocation();
  const { projectName } = location.state || {};

  const [isUploadOpen, setUploadOpen] = useState(false);
  const [podcasts, setPodcasts] = useState(defaultPodcasts);

  const handleUpload = (newPodcast) => {
    console.log("Uploaded data:", newPodcast);
    setPodcasts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newPodcast.name || "New Podcast",
        uploadDate: new Date().toLocaleDateString("en-GB"),
        uploadTime: new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setUploadOpen(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 p-7">
        <header className="flex items-center justify-between px-6 py-4">
          <Breadcrumbs projectName={projectName} />
          <LogoutIcone/>
        </header>

        <main className="flex-1 overflow-auto ps-6">
          <h1 className="text-2xl font-semibold mb-4">Add Podcast</h1>

          {/* Podcast cards */}
          <AddPodcastCards
            setUploadOpen={setUploadOpen}
            podcasts={podcasts}
            onPinClick={(title) => console.log("Pin clicked:", title)}
          />

          {/* Upload section shown only if podcasts array is empty */}
          {podcasts.length === 0 ? (
            <div
              onClick={() => setUploadOpen(true)}
              className="flex flex-col items-center justify-center px-10 pb-5 bg-white shadow rounded-lg cursor-pointer mt-6"
            >
              <div className="mb-4 p-2 w-24 h-24">
                <img
                  src={"./cloud_upload.svg"}
                  alt={"Upload"}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              <p className="text-lg font-medium text-gray-700 mb-2">
                Select a file or drag and drop here
              </p>

              <p className="text-sm text-gray-500 mb-6">
                (Podcast Media or Transcription Text)
              </p>
              <p className="text-xs text-gray-400 mb-6">
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
              </p>

              <button
                onClick={() => setUploadOpen(true)}
                className="px-6 py-2 bg-white border border-main-text rounded-full hover:bg-gray-100 transition main-text font-medium"
              >
                Select File
              </button>
            </div>
          ) : (
            <PodcastList podcasts={podcasts} setPodcasts={setPodcasts} />
          )}
        </main>
      </div>

      {/* Upload Modal */}
      {isUploadOpen && (
        <UploadModal
          isOpen={isUploadOpen}
          onClose={() => setUploadOpen(false)}
          onSubmit={handleUpload}
        />
      )}
    </div>
  );
};

export default AddPodcastPage;
