<template>
<v-app>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" sm="6" md="4">
                <h2 class="text-center">Đăng nhập Facebook</h2>
                <v-form @submit.prevent="register()">
                    <v-text-field label="Email hoặc số điện thoại" v-model="user.email"></v-text-field>
                    <v-text-field label="Mật khẩu" type="password" v-model="user.password"></v-text-field>
                    <v-btn type="submit" color="primary" block>Đăng kí</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import axios from 'axios'
export default ({
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response.data.bpi))
        }
    },
})
</script>

<style>

</style>
