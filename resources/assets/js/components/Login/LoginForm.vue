<template>
    <form @submit.prevent="login">
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮箱</label>
            <div class="col-md-6">
                <input v-model="email"
                       v-validate="'required|email'"
                       data-vv-as="邮箱"
                       id="email" type="text" class="form-control" name="email" value="" required>
                <strong v-show="errors.has('email')">{{ errors.first('email') }}</strong>
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>
            <div class="col-md-6">
                <input v-model="password"
                       v-validate="'required|min:6'"
                       data-vv-as="密码"
                       id="password" type="text" class="form-control" name="password" value="" required>
                <strong v-show="errors.has('password')">{{ errors.first('password') }}</strong>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">登录</button>
            </div>
        </div>
    </form>
</template>

<script>
    import JWTToken from './../../helpers/jwt'
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                let formData = {
                    email: this.email,
                    password: this.password,
                }
                axios.post('/api/login', formData).then(response => {
                    JWTToken.setToken(response.data.token);
                })
            }
        }
    }
</script>