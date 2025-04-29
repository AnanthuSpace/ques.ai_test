import React from "react";
import { useForm } from "react-hook-form";

const UploadModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 backdrop-blur-lg z-50">
      <div className="bg-white rounded-lg p-8 w-1/2 shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <img
            src="./Youtube.svg"
            alt="YouTube"
            className="w-10 h-10 rounded-full object-cover"
          />
          Upload from YouTube
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Video URL */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700">Video URL</label>
            <input
              type="text"
              {...register("videoUrl", { required: "URL is required" })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.videoUrl && (
              <span className="text-red-500 text-sm">
                {errors.videoUrl.message}
              </span>
            )}
          </div>

          {/* Transcript */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-700">Transcript Text</label>
            <textarea
              {...register("transcript", {
                required: "Transcript is required",
              })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-20 resize-none"
              //   placeholder="Paste or type transcription here..."
            />
            {errors.transcript && (
              <span className="text-red-500 text-sm">
                {errors.transcript.message}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white hover:bg-gray-700 transition"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
