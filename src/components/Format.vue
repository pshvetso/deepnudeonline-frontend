<template>
    <span>{{ formatter[fn](value, format) }}</span>
</template>

<script>
    import moment from 'moment';

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
        }
    };

    export default {
        name: "Format",
        props: ['value', 'fn', 'format'],
        computed: {
            formatter() {
                return formatter;
            }
        }
    }
</script>

<style scoped>

</style>