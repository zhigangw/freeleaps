class DateUtils {
    static FromJson(o) {
        if(o && "$date" in o){
            return new Date(o["$date"]);
        }
        else{
            return null;
        }
    }
}

export { DateUtils }