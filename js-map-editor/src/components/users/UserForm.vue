<template>
    <div class = "container">
        <form autocomplete="off" @submit.prevent="validateBeforeSubmit">
            <div class = "row header">
                <div class = "col-md-3 col-xs-12">
                    <button class="btn btn-success btn-block" type = "submit">Guardar</button>
                </div>
                <div class = "col-md-3 col-xs-12">
                    <button class="btn btn-danger btn-block" type = "button" v-on:click="volver()">Volver</button>
                </div>
            </div>
            <div class = "row">
                <div class = "alert alert-danger" v-if="error">Ha ocurrido un Error inesperado. Intente nuevamente</div>

                
                        <div class = "col-xs-12 col-md-6" :class="{ 'has-error' : errors.has('name')}">
                            <div class = "form-group">
                                <label for = "name">Nombre del Usuario</label>
                                <input 
                                autocomplete="off"
                                name="name"
                                v-model="user.name"
                                v-validate
                                data-vv-rules="required"
                                class="form-control"
                                type="text"
                                id="name"
                                placeholder="Nombre"
                                :class="{ 'has-error' : errors.has('name')}">
                                <span v-show="errors.has('name')" class="text-danger">
                                    {{ errors.first('name') }}
                                </span>
                            </div>
                        </div>
                        
                        <div class = "col-xs-12 col-md-6" :class="{ 'has-error' : errors.has('email')}">
                            <div class = "form-group">
                                <label>Email</label>
                                <input 
                                autocomplete="off"
                                name="email"
                                v-model="user.email"
                                v-validate
                                data-vv-rules="required"
                                class="form-control"
                                type="text"
                                id="email"
                                placeholder="Correo Electrónico"
                                :class="{ 'has-error' : errors.has('email')}">
                                <span v-show="errors.has('email')" class="text-danger">
                                    {{ errors.first('email') }}
                                </span>
                            </div>
                        </div>

                        <div class = "col-xs-12 col-md-6" :class="{ 'has-error' : errors.has('password')}">
                            <div class = "form-group">
                                <label>Password</label>
                                <input 
                                autocomplete="off"
                                name="password"
                                v-model="user.password"
                                v-validate
                                data-vv-rules="required"
                                class="form-control"
                                type="password"
                                id="password"
                                placeholder="Contraseña"
                                :class="{ 'has-error' : errors.has('password')}">
                                <span v-show="errors.has('password')" class="text-danger">
                                    {{ errors.first('password') }}
                                </span>
                            </div>
                        </div>

                        <div class = "col-xs-12 col-md-6">
                            <div class = "form-group">
                                <label>Status</label><br>
                                <div class = "pull-left">
                                    <input type="radio" id="active" value="true" v-model="user.status" class = "pull-right status">
                                    <label for="one" class = "status-label">Activo</label>
                                </div>
                                <div class = "pull-left">
                                    <input type="radio" id="inactive" value="false" v-model="user.status"  class = "pull-right">
                                    <label for="two" class = "status-label">Inactivo</label>
                                </div>
                            </div>
                        </div>
            </div>
        </form>
    </div>
</template>

<script>

    import usersTypes from '@/types/users';
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'UserForm',
        props: ['id'],
        data(){
            return {
                error: false
            }
        },
        computed: {
            ...mapGetters({
                user: usersTypes.getters.selectedUser
            })
        },
        created(){
            if (typeof this.id == 'undefined'){
                this.$store.commit(usersTypes.mutations.cleanUser);
            }else{
                this.read(this.id).then(res => true, error => {
                    console.log(error);
                    this.error = true;
                });
            }
        },
        methods: {
            ...mapActions({
                save: usersTypes.actions.save,
                read: usersTypes.actions.read
            }),
            validateBeforeSubmit () {
            this.$validator.validateAll()
                .then(result => {
                    if (!result){
                        //Fallan las validaciones
                    }else{
                        this.save({
                            id : this.user._id,
                            name: this.user.name,
                            email: this.user.email,
                            password: this.user.password,
                            created: this.user.created,
                            status: this.user.status
                        })
                        .then(
                            user => {
                                this.$store.commit(usersTypes.mutations.cleanUser);
                                this.$router.push('/users');
                            },
                            error => {
                                this.error = true;
                            }
                        )
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.error = true;
                })
            },
            volver(){
                this.$router.push('/users');
            }
        }
    }
</script>

<style scoped>
    .header {
        margin-bottom: 40px;
    }

    .status {
        margin-right: 30px;
    }

    .status-label {
        margin-right: 10px;
    }
</style>