import { Button as BtnIos } from 'react-native-ios-kit';
import { Button as BtnAndroid } from 'react-native-paper';
import { Platform } from 'react-native';

const Button = (props) => {
    return Platform.OS === 'ios'
        ? <BtnIos
            inline={props.inline}
            rounded={props.rounded}
            style={{
                ...props.style,
                width: "100%"
            }}
            {...props}
        >{props.children}</BtnIos>
        : <BtnAndroid
            mode={props.mode}
            style={{
                ...props.style,
                width: "100%"
            }}
            {...props}
        >{props.children}</BtnAndroid>
};

Button.defaultProps = {
    rounded: true,
    inline: true,
    mode: "contained"
}

export default Button;