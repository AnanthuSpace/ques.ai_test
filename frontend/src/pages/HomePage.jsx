import React, { useState } from "react";
import { Plus } from "lucide-react";
import CreateProjectModal from "../components/CreateProjectModal";
import ProjectListPage from "./ProjectListPage";

const HomePage = () => {
  const projectsDetails = [
    {
      projectName: "Sample Project",
      fileCount: 12,
      lastUpdated: "2025-04-27T10:00:00Z",
    },
    {
      projectName: "Alpha Beta",
      fileCount: 5,
      lastUpdated: "2025-04-26T14:30:00Z",
    },
    {
      projectName: "Sample Project",
      fileCount: 12,
      lastUpdated: "2025-04-27T10:00:00Z",
    },
    {
      projectName: "Alpha Beta",
      fileCount: 5,
      lastUpdated: "2025-04-26T14:30:00Z",
    },
    {
      projectName: "Sample Project",
      fileCount: 12,
      lastUpdated: "2025-04-27T10:00:00Z",
    },
    {
      projectName: "Alpha Beta",
      fileCount: 5,
      lastUpdated: "2025-04-26T14:30:00Z",
    },
  ];
  const [projects, setProjects] = useState(projectsDetails);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (projectName) => {
    console.log("Creating Project:", projectName);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      {projects.length === 0 ? (
        <>
          <h1 className="text-4xl font-bold main-text">Create a New Project</h1>

          <img
            src="/newproject.svg"
            alt="New Project Illustration"
            className="w-64 h-64"
          />

          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
          >
            <div className="bg-white text-black rounded-full p-1">
              <Plus size={18} />
            </div>
            Create New Project
          </button>
        </>
      ) : (
        <div className="w-full p-8">
          <ProjectListPage
            projects={projects}
            onCreate={() => setIsModalOpen(true)}
          />
        </div>
      )}

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProject}
      />
    </div>
  );
};

export default HomePage;
