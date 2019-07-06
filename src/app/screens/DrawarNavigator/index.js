import {  createDrawerNavigator } from 'react-navigation';
import Home from './Home';
import Aboutus from './Home';
import Logout from './Home';

const DrawerNavigator = ({
    Home: { screen: Home },
    Aboutus: { screen: Aboutus },
    Logout: { screen: Logout },
});

export default DrawerNavigator;