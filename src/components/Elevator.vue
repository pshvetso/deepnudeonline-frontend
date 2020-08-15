<template>
    <div class="layout_elevator" title="Наверх" @click="goUp()">
        <i class="fas fa-caret-circle-up elevator-icon"></i>
    </div>
</template>

<script>
    export default {
        name: "Elevator",
        data: () => ({
            scrollPosY: 0,
        }),
        methods: {
            goUp() {
                let y = window.scrollY;
                if(y > 0) {
                    window.scrollTo(0, 0);
                    this.scrollPosY = y;
                } else {
                    window.scrollTo(0, this.scrollPosY);
                }
            }
        }
    }
</script>

<style scoped>

    .layout_elevator:active {
        background: #f5f7f8;
        color: #7c9ca6;
    }

    .layout_elevator:hover {
        background: #f5f7f8;
        color: #a6b5ba;
    }

    .layout_elevator {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        display: none;
        width: 60px;
        height: 100%;
        color: #d5dddf;
        text-align: center;
    }

    @media (min-width: 1260px) {
        .layout_elevator {
            display: block;
        }
    }

    .elevator-icon {
        position: relative;
        top: 50%;
        margin-top: -15px;
        font-size: x-large;
    }

</style>