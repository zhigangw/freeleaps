class ProjectData {
    static getId(project) {
        return project._id.$oid;
    }
    
    static getStatusString(status) {
        switch (status) {
            case 0: return "Ongoing";
            case 1: return "Delivered";
            case 2: return "Blocked";
        }
        return "undefined";
    }

}

export { ProjectData }