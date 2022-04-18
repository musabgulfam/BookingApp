import React from 'react';
import {
    Navigation
} from './src/navigation'
import store from './src/store';
import { StoreProvider } from 'easy-peasy';

function App(props) {
    return (
        <StoreProvider store={store}>
            <Navigation />
        </StoreProvider>
    );
}

export default App;