import namespace from '@/utils/namespace';

export default namespace('global', {
    getters : [
        'processing'
    ],
    actions : [

    ],
    mutations : [
        'startProcessing',
        'stopProcessing'
    ]
});