import * as React from 'react';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import {Text,View,TouchableOpacity,Image,ScrollView} from 'react-native';
import HomeScreen from '../screens/HomeScreen'

export default class Drawer extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={{width:'100%'}}>
                <View>
                    <DrawerItems {...this.props}
                    />
                </View>

                <View>
                     <TouchableOpacity onPress={()=>{
                         this.props.navigation.navigate('HomeScreen'),
                         firebase.auth().signOut(),
                         Alert.alert('Logged Out');
                         
                     }}
                     style={{marginTop:90,backgroundColor:'red',marginLeft:100}}
                     >
                         <Text style={{marginTop:50,fontSize:30}}>Log Out</Text>
                     </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}