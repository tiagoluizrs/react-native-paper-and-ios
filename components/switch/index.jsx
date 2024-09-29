import { Switch  as SwitchIos } from 'react-native-ios-kit';
import { Switch  as SwitchAndroid } from 'react-native-paper';
import { Platform } from 'react-native';

const Switch = (props) => {
    return Platform.OS === 'ios'
        ? <SwitchIos {...props}/>
        : <SwitchAndroid {...props}/>
};

Switch.defaultProps = {}

export default Switch;