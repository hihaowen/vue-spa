<template>
<form @submit.prevent="register">
    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-md-right">用户名</label>
        <div class="col-md-6">
            <input v-model="name"
                   v-validate="'required|min:6'"
                   data-vv-as="用户名"
                   id="name" type="text" class="form-control" name="name" value="" required>
            <strong v-show="errors.has('name')">{{ errors.first('name') }}</strong>
        </div>
    </div>

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

    <div class="form-group row">
        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">确认密码</label>
        <div class="col-md-6">
            <input v-model="password_confirmation"
                   v-validate="'required|min:6|confirmed:password'"
                   data-vv-as="确认密码"
                   id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            <strong v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</strong>
        </div>
    </div>

    <div class="form-group row mb-0">
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary">注册</button>
        </div>
    </div>
</form>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                let formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                axios.post('/api/register', formData).then(response => {
                    console.log('create ok.');
                    this.$router.push({name: 'confirm'})
                })
            }
        }
    }
</script>