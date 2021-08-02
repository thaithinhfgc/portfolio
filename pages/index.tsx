import * as React from 'react';
import Navbar from '../components/navbar';
import Profile from '../components/profile';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <Profile />
        </>
    );
};

export default Home;
