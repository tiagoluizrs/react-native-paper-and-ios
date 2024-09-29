import * as React from 'react';
import { Avatar as AvatarAndroid } from 'react-native-paper';
import { Avatar as AvatarIos } from 'react-native-ios-kit';
import { Platform } from 'react-native';

const Avatar = (props) => {
  return Platform.OS === 'ios'
  	? <AvatarIos {...props} />
    : (
      	props.icon 
      		? <AvatarAndroid.Icon {...props} />
      		:	(
            	props.source 
            		? <AvatarAndroid.Image {...props} />
            		:	<AvatarAndroid.Text {...props} />
          	)
      )
};

export default Avatar;