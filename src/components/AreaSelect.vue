<template>
    <div>
        <div class="file-upload-form">
            Upload an image file:
            <input type="file" @change="previewImage" accept="image/*">
        </div>
        <div class="image-preview">
            <p>Drag to make a selection:</p>
            <!-- img class="preview" v-if="imageData.length > 0" :src="imageData" -->
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
    import createjs from 'createjs-cmd'

    export default {
        name: "AreaSelect",
        data: () => ({
            stage: null,
            img: null,
            strokeDash: null,
            r: null,
            moveListener: null,
        }),
        mounted() {
            this.stage = new createjs.Stage("canvas");

            createjs.Ticker.on("tick", this.tickerOnTick);

            let selection = new createjs.Shape(),
                g = selection.graphics.setStrokeStyle(1).beginStroke("#000").beginFill("rgba(0,0,0,0.2)"),
                sd = g.setStrokeDash([10,5], 0).command,
                r = g.drawRect(0,0,100,100).command,
                moveListener;

            this.stage.on("stagemousedown", this.dragStart);
            this.stage.on("stagemouseup", this.dragEnd);

            this.selection = selection;
            this.strokeDash = sd;
            this.r = r;
            this.moveListener = moveListener;
        },
        methods: {
            previewImage: function(event) {
                // Reference to the DOM input element
                let input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    let reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        //this.imageData = e.target.result;

                        this.img = new Image();
                        this.img.onload = this.onFileUpload;
                        this.img.src = e.target.result;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            },
            onFileUpload: function() {
                let bmp = new createjs.Bitmap(this.img);
                this.stage.addChild(bmp);

                let scale, x = 0, y = 0;
                if(bmp.image.height > bmp.image.width) {
                    scale = this.stage.canvas.height / bmp.image.height;
                    x = (this.stage.canvas.width - bmp.image.width * scale) /2;
                } else {
                    scale = this.stage.canvas.width / bmp.image.width;
                    y = (this.stage.canvas.height - bmp.image.height * scale) /2;
                }

                bmp.x = x;
                bmp.y = y;
                bmp.scaleX = scale;
                bmp.scaleY = scale;
                this.stage.update();
            },
            tickerOnTick: function() {
                this.stage.update(event);
                this.strokeDash.offset--;
            },
            dragStart: function(event) {
                this.stage.addChild(this.selection).set({x:event.stageX, y:event.stageY});
                this.r.w = 0;
                this.r.h = 0;
                this.moveListener = this.stage.on("stagemousemove", this.drag);
            },
            drag: function(event) {
                this.r.w = event.stageX - this.selection.x;
                this.r.h = event.stageY - this.selection.y;
            },
            dragEnd: function() {
                this.stage.off("stagemousemove", this.moveListener);
            },
        }
    }
</script>

<style scoped>
    canvas {
        border: 1px solid red;
        width: 100%;
    }
</style>