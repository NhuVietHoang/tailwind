<template>
<v-container fluid>
    <v-form @submit.prevent="register">
        <v-text-field label="Name" v-model="user.name" type="name" ></v-text-field>
        <v-text-field label="Email" v-model="user.mail" type="email" ></v-text-field>
        <v-text-field label="Phone" v-model="user.phone" type="phone" ></v-text-field>
        <v-text-field label="Mật khẩu" v-model="user.password" type="password" ></v-text-field>
        <v-text-field label="" v-model="user.apartment_id" ></v-text-field>
        <v-checkbox label="Tôi đồng ý với các điều khoản sử dụng"></v-checkbox>
        <v-btn type="submit">Đăng kí</v-btn>
    </v-form>
</v-container>
</template>

<script lang="ts">
import  {
    defineComponent
} from 'vue'
import axios from 'axios'
export default defineComponent({
    name: 'RegisterUser',
    data() {
        return {
            user: {
                name: '',
                mail: '',
                password: '',
                phone: '',
                apartment_id:'1',
            }
        }
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/register', {
                    email: this.user.mail,
                    password: this.user.password,
                    name: this.user.name,
                    phone: this.user.phone,
                    apartment_id: this.user.apartment_id
                })
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    }
})
</script>

<style>

</style>
