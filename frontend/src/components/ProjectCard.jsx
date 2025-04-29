import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  projectName = "",
  fileCount = 0,
  lastUpdated = new Date().toISOString(),
}) => {
  const navigate = useNavigate();

  const getInitials = (name = "") => {
    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return isNaN(d)
      ? "Unknown date"
      : d.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  const handleClick = () => {
    navigate("/addpodcast", {
      state: { projectName },
    });
  };

  return (
    <div
      className="flex items-center bg-white rounded-lg shadow p-2 hover:shadow-md transition"
      onClick={handleClick}
    >
      <div className="flex-none w-23 h-18 bg-orange-400 text-white rounded flex items-center justify-center text-lg font-bold">
        {getInitials(projectName)}
      </div>
      <div className="flex-1 ml-4 flex flex-col justify-between text-start">
        <div>
          <h3 className="text-xl font-semibold main-text ">
            {projectName || "Unnamed"}
          </h3>
          <p className="text-sm text-gray-500">{fileCount} files</p>
        </div>
        <p className="text-xs text-gray-400">
          Last updated {formatDate(lastUpdated)}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
