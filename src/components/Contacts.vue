<template>
    <div>
        <fieldset :disabled="disabled" v-if="!msgSent">

            <h2>Сontact us</h2>

            <div v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error" class="text-danger">
                        <small>{{ error }}</small>
                    </li>
                </ul>
            </div>

            <form id="contactsForm" @submit.prevent="sendForm">
                <div class="form-group">
                    <label for="inputName">Your name</label>
                    <input type="text" class="form-control" id="inputName" name="inputName" v-model="inputName"
                           placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" class="form-control" id="inputEmail" name="inputEmail" v-model="inputEmail"
                           placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="inputText">Message</label>
                    <textarea class="form-control" id="inputText" name="inputText" v-model="inputText"
                              placeholder="Message"></textarea>
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Attach file</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" ref="file" class="custom-file-input" id="inputGroupFile01"
                               aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" name="submit">Submit</button>
            </form>

        </fieldset>
        <div v-else>
            <h3>Your message has been sent. Thank you!</h3>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Contacts",
        data: () => ({
            errors: [],

            inputName: null,
            inputEmail: null,
            inputText: null,

            disabled: false,
            msgSent: false
        }),
        methods: {
            validateForm: function () {
                this.errors = [];

                if (!this.inputName) {
                    this.errors.push('Please enter your name.');
                }
                if (!this.inputEmail) {
                    this.errors.push('Please enter e-mail.');
                }
                if (!this.inputText) {
                    this.errors.push('Please enter your message.');
                }

                return (!this.errors.length);
            },
            sendForm: function () {
                if (!this.validateForm()) return;

                this.disabled = true;

                let contactsForm = document.getElementById('contactsForm');
                let formData = new FormData(contactsForm);

                if(this.$refs.file.files.length === 0) {
                    axios.post('/api/contacts', formData)
                        .then(response => {
                            window.console.log(response);
                            this.msgSent = true;
                        });
                } else {
                    formData.append('inputGroupFile01', this.$refs.file.files[0]);

                    axios.post('/api/contactsattach',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    ).then(response => {
                        window.console.log(response);
                        this.msgSent = true;
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
