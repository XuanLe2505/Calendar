import { createStore } from 'vuex';
import booking from './modules/booking';

export default createStore({
    modules: {
        booking,
    },
})