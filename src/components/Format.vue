<template>
    <span>{{ formatter[fn](value, format) }}</span>
</template>

<script>
    import moment from 'moment';
    import helpers from "../lib/helpers";

    var formatter = {
        date: function (value, format) {
            if (value) {
                return moment(String(value)).format(format || 'DD.MM.YY')
            }
        },
        time: function (value, format) {
            if (value) {
                return moment(String(value)).format(format || 'h:mm A');
            }
        },
        datetime: function (value, format) {
            if (value) {
                return moment(String(value)).format(format || 'DD.MM.YY h:mm');
            }
        },
        postDate: function (value, format) {
            if (value) {
                value = String(value);

                if(helpers.momentIsToday(value)) {
                    return moment(value).format(format || 'h:mm A');
                } else if(helpers.momentIsYesterday(value)) {
                    return "Yesterday " + moment(value).format(format || 'h:mm A');
                } else {
                    return moment(value).format(format || 'DD.MM.YY h:mm');
                }
            }
        }
    };

    export default {
        name: "Format",
        props: {
            value: String,
            fn: String,
            format: String
        },
        computed: {
            formatter() {
                return formatter;
            }
        }
    }
</script>

<style scoped>

</style>