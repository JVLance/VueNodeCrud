
import Vuex from 'vuex';
import usersModule from '@/modules/users'
import globalTypes from '@/types/global';


export default {
    state: {
        processing: false
    },
    getters: {
        [globalTypes.getters.processing]: state => state.processing
    },
    mutations: {
        [globalTypes.mutations.startProcessing] (state) {
            state.processing = true;
        },
        [globalTypes.mutations.stopProcessing] (state) {
            state.processing = false;
        }
    },
    modules: {
        usersModule
    }
};