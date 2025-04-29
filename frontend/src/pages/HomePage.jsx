import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import CreateProjectModal from "../components/CreateProjectModal";
import ProjectListPage from "./ProjectListPage";
import { createProjectApi, fetchProjectsApi } from "../api/userApi";
import { toast } from "sonner";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetchProjectsApi();
        setProjects(res.projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleCreateProject = async (projectName) => {
    try {
      const res = await createProjectApi(projectName);
      toast.success(res.message);
      setProjects((prev) => [res.project, ...prev]);
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error);
      console.error("Error creating project:", error);
    }
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
            Create your first project to get started. You can organize files and
            edit transcripts with ease.
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
