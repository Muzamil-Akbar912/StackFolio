const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    technologies: [{
        type: String,
        trim: true
    }],

    image: {
        type: String,
        trim: true
    },

    githubUrl: {
        type: String,
        trim: true
    },

    liveUrl: {
        type: String,
        trim: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;