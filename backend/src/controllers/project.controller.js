export const createProject = (req, res) => {
    const { projectName } = req.body;

    if (!projectName) {
        return res.status(400).json({ message: "Project name is required." });
    }

    return res.status(201).json({ message: "Project created successfully!", projectName });
};

export const getAllProjects = (req, res) => {

    return res.status(200).json({ projects: [] });
};
