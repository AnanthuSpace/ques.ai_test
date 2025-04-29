import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileName: String,
    discription: String,
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    files: [fileSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Project = mongoose.model("Project", projectSchema);

export default Project;