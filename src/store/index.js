import { action, actionOn, createStore, thunk } from 'easy-peasy';
import auth from '@react-native-firebase/auth'
import { composeWithDevTools } from 'remote-redux-devtools'
import devToolsEnhancer from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'ReversationApp',
    hostname: 'localhost',
    port: 8081 // the port your remotedev server is running at
});

const store = createStore({

    // status: {
    //     loading: false,
    //     error: {},
    //     message: null,
    // },

    user: null,

    setUser: action((state, payload) => {
        console.log('Imp payload: ', payload);
        state.user = payload;
    }),

    signup: thunk(async (actions, payload) => {
        console.log('Creating user...', payload);
        actions.setUser('None')
        const res = await auth().createUserWithEmailAndPassword(payload.email, payload.password);
        actions.setUser(res);
        return res;
    }),

    login: thunk(async (actions, payload) => {
        console.log('User login...');
        const res = await auth().signInWithEmailAndPassword(payload.email, payload.password);
        actions.setUser(res);
        return res;
    })

}, {
    compose: composeWithDevTools({ 
        realtime: true, 
        trace: true,
        hostname: 'localhost',
        port: 8081 
    })
});

export default store;
