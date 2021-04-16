class DateUtils {
    static FromJson(o) {
        if (o) {
            if (typeof o === 'string') {

                return new Date(o);
            }
            if ("$date" in o) {
                return new Date(o["$date"]);
            }
        }
        return null;
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

    static GetDeltaInDays(o) {
        let date = (o instanceof Date) ? o : DateUtils.FromJson(o);
        return Math.abs(Math.floor((date - Date.now()) / (1000 * 60 * 60 * 24)))
    }

}

export { DateUtils }