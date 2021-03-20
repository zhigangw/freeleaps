class OIDUtils {
    static FromJson(o) {
        return (o && o._id) ? o._id.$oid : null;
    }
}
export { OIDUtils }