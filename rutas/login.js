import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Login } from '../screen/Login';

const screens = {
    Login: {
        screen: Login,
        navigationOption: {
            headerShown: false
        },
    }
}

const LoginStack = createStackNavigator(screens);
export default createAppContainer(LoginStack);
