<script>
export default {
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(/*event*/) {
            if ((window.innerHeight + window.scrollY) + 1 >= document.body.offsetHeight) {
                //window.console.log("you're at the bottom of the page");
                //window.console.log((window.innerHeight + window.scrollY) - document.body.offsetHeight);
                this.callAPI();
            }

            //window.console.log(window.innerHeight +" " + window.scrollY +" "+ document.body.offsetHeight);
        },
    },
}
</script>