<template>
    <div class = "container">
        <div class = "row">
            <div class = "col-md-3 col-xs-12">
                <button class = "btn btn-success btn-block" v-on:click="add()">Agregar Usuario</button>
            </div>
        </div>
        <div class = "row">
            <div class = "col-md-12">
            <table class = "table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Fecha Creación</th>
                        <th>Status</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.created}}</td>
                        <td>
                            <span class="label label-success" v-if="user.status">Activo</span>
                            <span class="label label-danger" v-if="!user.status">Inactivo</span>
                        </td>
                        <td>
                            <button type = "button" class = "btn btn-success btn-xs" v-on:click="edit(user)">Editar</button>
                            <button type = "button" class = "btn btn-danger btn-xs" v-on:click="drop(user._id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>

    import usersTypes from '@/types/users';
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name : 'UserIndex',
        computed: {
            ...mapGetters({
                users: usersTypes.getters.users,
                selectedUser: usersTypes.getters.selectedUser
            })
        },
        methods: {
            ...mapActions({
                drop: usersTypes.actions.drop
            }),
            add(){
                this.$store.commit(usersTypes.mutations.cleanUser);
                this.$router.push('/users/add');
            },
            edit(user){
                this.$store.commit(usersTypes.mutations.setUSer, {selectedUser: user});
                this.$router.push('/users/edit/'+user._id);
            }
        },
        mounted () {
            this.$store.dispatch(usersTypes.actions.read);
        }
    }
</script>

<style scoped>

</style>