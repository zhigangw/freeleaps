class DateUtils {
    static FromJson(o) {
        if (o && "$date" in o) {
            return new Date(o["$date"]);
        }
        else {
            return null;
        }
    }
    
    static FromJsonToString(o) {
        let date = DateUtils.FromJson(o);
        if (date) {
            return date.toISOString().split("T")[0];
        }
        else {
            return null;
        }
    }
}

export { DateUtils }