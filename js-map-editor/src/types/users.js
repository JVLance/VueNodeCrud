import namespace from '@/utils/namespace';

export default namespace('users', {
    getters : [
        'users',
        'selectedUser'
    ],
    actions : [
        'read',
        'save',
        'drop'
    ],
    mutations : [
        'cleanUser',
        'setUSer',
        'reload'
    ]
});