<template>
    <div class="q-pa-md q-gutter-sm" style="margin-left: 15px; margin-right: 15px;">
        
        <q-card-section class="text-white" style="background-color: #af0000;">
            <div class="text-h6 text-left"> Create New User </div>
        </q-card-section>

        <div class="q-pa-md" style="width: 30%; margin-left: 35%;">
            <div style="padding-top: 20px;">
                <q-input v-model="user.firstName" label="First Name" 
                required>
                </q-input>
            </div>
            <div style="padding-top: 30px;">
                <q-input v-model="user.lastName" label="Last Name" 
                required>
                </q-input>
            </div>
            <div style="padding-top: 30px;">
                <q-input v-model="user.email" label="Email" 
                type="email" required>
                </q-input>
            </div>
            <div style="padding-top: 30px;">
                <q-input v-model="user.password" label="Password" 
                type="password" required >
                </q-input>
            </div>
            <div style="padding-top: 30px;">
                <q-select v-model="user.role" label="Role"
                required :options="user_roles" option-value="USER_ROLE_ID" 
                option-label="USER_ROLE_NAME">
                </q-select>
            </div>
            <div style="padding-top: 30px;">
                <q-select v-model="user.period" label="Class Period"
                required :options="period_options" option-value="value" 
                option-label="label">
                </q-select>
            </div>

            <div style="padding-top: 30px;" >
                <q-btn @click="createUser" label="Register User" icon="add" outline />
            </div>

        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';

export default {

    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: null,
                period: null,   
            },
            user_roles: [],
            period_options: [
                {label: '1', value: 1},
                {label: '2', value: 2},
                {label: '3', value: 3},
                {label: '4', value: 4},
                {label: '5', value: 5},
                {label: '6', value: 6},
                {label: '7', value: 7},
                {label: '8', value: 8}
            ]
        }
    },

    created() {
        axios.get(`http://localhost:8001/api/roles`).then((res) => {
            this.user_roles = res.data
        })
    },

    methods: {
        async createUser() {
            try {

                const isEmailValid = this.validateEmail(this.user.email);
                const isPasswordValid = this.validatePassword(this.user.password);

                console.log(isEmailValid)
                console.log(isPasswordValid)

                if (!this.validateEmail(this.user.email) || !this.validatePassword(this.user.password)) {
                    return;
                }
                const userData = {
                    END_USER_FIRST_NAME: this.user.firstName,
                    END_USER_LAST_NAME: this.user.lastName,
                    END_USER_EMAIL: this.user.email,
                    END_USER_PASSWORD: this.user.password,
                    END_USER_PERIOD: this.user.period.value,
                    USER_ROLE_ID: this.user.role.USER_ROLE_ID,
                    ACTIVE_STATUS_ID: 1,
                };

                const response = await axios.post(`http://localhost:8001/api/enduser`, userData);

                if (response.status === 200) {
                    this.$q.notify({ color: 'positive', message: 'User registered successfully' });
                    this.$router.push('/users');
                } else {
                    this.$q.notify({ color: 'negative', message: 'Registration failed' });
                }

                console.log(userData.USER_ROLE_ID)
                console.log('Sending data.')
            } catch (error) {
                console.error('API request failed:', error);
                this.$q.notify({ color: 'negative', message: 'An error occurred during registration' });
            }
        },

        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(email);

            if (!isValidEmail) {
                this.$q.notify({ color: 'negative', message: 'Invalid email format' });
            }

            return isValidEmail
        },

        validatePassword(password) {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;
            const isValidPassword = passwordRegex.test(password)
            if (!isValidPassword) {
                this.$q.notify({ color: 'negative', message: 'Invalid password format' });
            }

            return isValidPassword
        },
    
  },
}

</script>

<style scoped>

</style>