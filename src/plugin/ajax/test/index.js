import {Test} from './test';
const config = {
    type: 'post',
    headers: {},
    url: '',
    data: {

    },
    timeout: 3000,
};
const xhr = new XMLHttpRequest();

export default {
    start() {
        Test(xhr, config);
    }
};

