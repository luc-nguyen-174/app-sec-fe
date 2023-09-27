<template>
    <div class="login-form">
        <div class="q-pa-md" style="max-width: 400px">
            <q-form @submit="handleLogin" class="q-gutter-md">
                <q-input filled type="text"
                         v-model="user.username"
                         label="Username"
                         lazy-rules
                />

                <q-input filled type="password"
                         v-model="user.password"
                         label="Password"
                         lazy-rules
                />

                <div>
                    <q-btn label="Submit" type="submit" color="primary"/>
                </div>
            </q-form>

        </div>
    </div>
</template>

<script>
import {useQuasar} from 'quasar'
import {reactive, ref} from 'vue'

export default {
    setup() {
        const $q = useQuasar()
        const accept = ref(false)
        const user = reactive({
            username: '',
            password: ''
        })
        return {
            user,
            accept,

            handleLogin() {
                if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                } else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                    console.log(user)
                }
            }
        }
    }
}
</script>
