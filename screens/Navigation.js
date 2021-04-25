import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Drawer from '../screens/Drawer';
import appTab from '../screens/appTab';

const navi = createDrawerNavigator({
        Home:{
            screen:appTab
        },
    },
        {
            centerComponent:Drawer
        },
        {initialRouteName:'Home'
})

export default navi;