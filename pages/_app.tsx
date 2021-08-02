/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/tailwind.css';
import { store } from '../store';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
