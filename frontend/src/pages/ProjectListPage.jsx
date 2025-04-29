import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Plus } from "lucide-react";

const ProjectListPage = ({ projects = [], onCreate }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 px-6">
        <h2 className="text-2xl font-bold main-text">Projects</h2>

        <button
          onClick={onCreate}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
        >
          <div className="bg-white text-black rounded-full p-1">
            <Plus size={18} />
          </div>
          Create New Project
        </button>
      </div>
      <div className="max-w-screen mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard
              key={`${p.projectName}-${idx}`}
              projectName={p.projectName}
              fileCount={p.fileCount}
              lastUpdated={p.lastUpdated}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectListPage;
