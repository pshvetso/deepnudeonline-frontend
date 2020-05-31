<template>
    <div>
        <h2>Сontact us</h2>
        <form action="/api/contacts">
            <div class="form-group">
                <label for="inputName">Your name</label>
                <input type="text" class="form-control" id="inputName" name="inputName" placeholder="Enter your name">
            </div>
            <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="inputText">Message</label>
                <textarea class="form-control" id="inputText" name="inputText" placeholder="Message"></textarea>
            </div>
            <div class="input-group form-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Attach file</span>
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                           aria-describedby="inputGroupFileAddon01">
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>

</style>