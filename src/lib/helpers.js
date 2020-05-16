export default {
    buildHttpParams(params) {
        let httpParams = "",
            delim = "";

        for (var prop in params) {
            httpParams += delim + prop + '=' + params[prop];
            delim = "&";
        }

        return httpParams;
    },
}
