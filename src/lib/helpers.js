import moment from 'moment';

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

    momentIsToday(momentDate) {
        return moment().isSame(momentDate, 'd');
    },

    momentIsYesterday(momentDate) {
        return moment().subtract(1, 'days').isSame(momentDate, 'd');
    }
}
