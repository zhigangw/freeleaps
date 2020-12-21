class ResponseFormatter {
    static getId(data) {
        return data._id.$oid;
    }

    static getDate(data) {
        return data.$date;
    }
}

export { ResponseFormatter }