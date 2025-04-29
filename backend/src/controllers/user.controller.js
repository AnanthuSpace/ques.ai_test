import Project from "../model/project.model.js";
import User from "../model/user.model.js"

export const createProject = async (req, res, next) => {
  try {
    const { projectName } = req.body;
    const userId = req.id;

    if (!projectName) {
      const error = new Error("Project name is required");
      error.statusCode = 400;
      throw error;
    }

    const newProject = new Project({ projectName, userId });
    const savedProject = await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project created successfully!",
      project: savedProject,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    const userId = req.id;

    if (!userId) {
      const error = new Error("Unauthorized: User ID not found");
      error.statusCode = 401;
      throw error;
    }

    const projects = await Project.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully",
      projects,
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    const userId = req.id;

    if (!userId) {
      const error = new Error("Unauthorized: User ID not found");
      error.statusCode = 401;
      throw error;
    }

    const userData = await User.findById(userId).select('-password');

    res.status(200).json({
      success: true,
      userData,
    });
  } catch (error) {
    next(error);
  }
};