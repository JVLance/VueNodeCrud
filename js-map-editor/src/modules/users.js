import types from '@/types/users';
import globalTypes from '@/types/global';
import Vue from 'vue';

const state = {
    users : [],
    baseUSer: {
        id: null,
        name: '',
        email: '',
        password: '',
        created: '',
        status: true
    },
    selectedUser: {}
}


const actions = {
    
    [types.actions.read]: ({commit}) => {
        commit(globalTypes.mutations.startProcessing);
        Vue.http.get('user').then(user => {
            commit(types.mutations.reload, {apiResponse: user});
            commit(globalTypes.mutations.stopProcessing);
        })
    },
    [types.actions.save]: ({commit}, userInput) => {
    
        commit(globalTypes.mutations.startProcessing);

        if (userInput.id == null){
            delete(userInput.id);
            let create = new Date();
            userInput.created = create.getDate();
        }

        return new Promise((resolve, reject) => {
            Vue.http.post('user', userInput)
                .then(user => {
                    resolve(user);
                })
                .catch(error => {
                    reject(error);
                })
                .finally(() => {
                    commit(globalTypes.mutations.stopProcessing);
                });
        })
    }
};

const getters = {
    [types.getters.users]: state => state.users,
    [types.getters.selectedUser]: state => state.selectedUser
};


const mutations = {
    [types.mutations.cleanUser]:(state) => {
        state.selectedUser = state.baseUSer;
    },
    [types.mutations.reload]: (state, {apiResponse}) => {
        state.users = apiResponse.data;
    },
    [types.mutations.setUSer]: (state, {selectedUser}) => {
        state.selectedUser = selectedUser;
    }
    /*
    [types.mutations.receivedCinemas]: (state, {apiResponse}) => {
        state.cinemas = apiResponse.data;
    },
    [types.mutations.setSearch]: (state, query) => {
        state.query.search = query;
    },
    [types.mutations.setRooms]: (state, rooms) => {
        state.query.rooms = rooms;
    },
    [types.mutations.setSeats]: (state, seats) => {
        state.query.seats = seats;
    },
    [types.mutations.clearFilters]: (state) => {
        state.query = {
            search: '',
            rooms: null,
            seats: null
        }
    }
    */
}

export default {
    state,
    actions,
    getters,
    mutations
};