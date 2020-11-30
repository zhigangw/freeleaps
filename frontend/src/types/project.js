class ProjectData {
    static getId(project) {
        return project._id.$oid;
    }
}

export { ProjectData }