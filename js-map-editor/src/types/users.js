import namespace from '@/utils/namespace';

export default namespace('users', {
    getters : [
        'users',
        'selectedUser'
    ],
    actions : [
        'read',
        'save',
        'delete'
    ],
    mutations : [
        'cleanUser',
        'setUSer',
        'reload'
    ]
});