import React from "react";
import { useForm } from "react-hook-form";

const CreateProjectModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data.projectName);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 backdrop-blur-lg z-50">
      <div className="bg-white rounded-lg p-8  w-1/2 shadow-lg relative">
        <h2 className="text-2xl text-start font-semibold mb-6 ">
          Create Project
        </h2>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-start text-gray-500 pb-2">Enter Project Name</label>
            <input
              type="text"
              placeholder="Enter Project Name"
              {...register("projectName", {
                required: "Project Name Can't be empty",
              })}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.projectName && (
              <span className="text-red-500 text-sm text-start">
                {errors.projectName.message}
              </span>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-red-500 rounded-lg hover:text-red-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-main-text text-white rounded-lg transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
