<template>
    <div class="container-fluid">

        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Overview</li>
        </ol>

        <h1 class="text-gray-800">Upload image</h1>

        <div class="card mb-3">
            <div class="card-header">Upload image and select square area</div>

            <div class="card-body">
                <form name="upload_image_form" target="upload.html">
                    <label>
                        Text:
                        <input name="descr" type="text" class="form-control form-control-sm" />
                    </label>
                    <AreaSelect></AreaSelect>
                    <input type="submit" value="Upload" class="btn btn-brand btn-upper btn-bold" />
                    <input type="button" value="Cancel" class="btn" />
                </form>
            </div>
        </div>
    </div>
    <!-- /.container-fluid -->
</template>

<script>
    import AreaSelect from './AreaSelect.vue'

    export default {
        name: "UploadForm",
        components: {
            AreaSelect
        }
    }
</script>

<style scoped>

</style>