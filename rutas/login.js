import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screen/Login';
import Registro from '../screen/Register';
//import Home from '../screens/home';


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false 
        },
    },
    Registro: {
        screen: Registro,
        navigationOptions: {
            headerShown: false  
        },
    },
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
