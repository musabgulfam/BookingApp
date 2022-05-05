import { action, actionOn, createStore, thunk } from 'easy-peasy';
import auth from '@react-native-firebase/auth'
import Api from '../services/Api';

const api = Api.createApiClient();

const store = createStore({

    // status: {
    //     loading: false,
    //     error: {},
    //     message: null,
    // },

    user: null,
    hotels: [],
    resorts: [],
    events: [],

    setUser: action((state, payload) => {
        console.log('Imp payload: ', payload);
        state.user = payload;
    }),

    setHotelAction: action((state, payload) => {
        state.hotels = payload;
    }),

    setResortAction: action((state, payload) => {
        state.resorts = payload;
    }),

    setEventsAction: action((state, payload) => {
        state.events = payload;
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
    }),

    createUser: thunk(async (actions, payload) => {
        console.log('Adding user to database...');
        const res = await api.addUser(payload);
    }),

    setHotels: thunk(async (actions, payload) => {
        console.log('Setting hotels...');
        const res = await api.getHotels();
        actions.setHotelAction(res.data);
    }),

    setResorts: thunk(async (actions, payload) => {
        console.log('Setting resorts...');
        const res = await api.getResorts();
        actions.setResortAction(res.data);
    }),

    setEvents: thunk(async (actions, payload) => {
        console.log('Setting events...');
        const res = await api.getEvents();
        actions.setEventsAction(res.data);
    })

});

export default store;
