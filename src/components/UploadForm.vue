<template>
    <div>
        <h1 class="text-gray-800">Upload image</h1>

        <div class="card mb-3">
            <div class="card-header">Upload image and select square area</div>

            <div class="card-body">
                <form name="upload_image_form" target="upload.html">
                    <div class="form-group">
                        <label for="descr">Text</label>
                        <input name="descr" id="descr" type="text" class="form-control form-control-sm"/>
                    </div>
                    <AreaSelect></AreaSelect>
                    <input type="submit" value="Upload" class="btn btn-brand btn-upper btn-bold"/>
                    <input type="button" value="Cancel" class="btn"/>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import AreaSelect from './AreaSelect'

    export default {
        name: "UploadForm",
        components: {
            AreaSelect
        }
    }
</script>

<style scoped>

</style>