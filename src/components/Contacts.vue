<template>
    <div>
        <fieldset :disabled="disabled" v-if="!msg">

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
                    <label for="name">Your name</label>
                    <input type="text" class="form-control" id="name" name="name" v-model="contactsFormData.name"
                           placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" v-model="contactsFormData.email"
                           placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="text">Message</label>
                    <textarea class="form-control" id="text" name="text" v-model="contactsFormData.text"
                              placeholder="Message"></textarea>
                </div>
                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Attach file</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" ref="file" class="custom-file-input" id="attach"
                               aria-describedby="inputGroupFileAddon01">
                        <label class="custom-file-label" for="attach">Choose file</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" name="submit">Submit</button>
            </form>

        </fieldset>
        <div v-else>
            <h3>{{msg}}</h3>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Contacts",
        data: () => ({
            errors: [],

            contactsFormData: {
                name: null,
                email: null,
                text: null
            },

            disabled: false,
            msg: false
        }),
        methods: {
            validateForm: function () {
                this.errors = [];

                if (!this.contactsFormData.name) {
                    this.errors.push('Please enter your name.');
                }
                if (!this.contactsFormData.email) {
                    this.errors.push('Please enter e-mail.');
                }
                if (!this.contactsFormData.text) {
                    this.errors.push('Please enter your message.');
                }

                return (!this.errors.length);
            },
            sendForm: function () {
                if (!this.validateForm()) return;

                this.disabled = true;

                //let contactsForm = document.getElementById('contactsForm');
                const formData = new FormData();
                formData.append('contactsData', new Blob([JSON.stringify(this.contactsFormData)], {
                    type: "application/json"
                }));

                let config = {};

                if(this.$refs.file.files.length !== 0) {
                    formData.append('attach', this.$refs.file.files[0]);

                    config = {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                }

                axios.post('/api/v1/contacts', formData, config).then(response => {
                    window.console.log(response);
                    this.msg = "Your message has been sent. Thank you!";
                }).catch((error) => {
                    window.console.log(error);
                    this.msg = error.response.data.message;
                });
            }
        }
    }
</script>

<style scoped>

</style>
