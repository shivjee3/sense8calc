const React = require("react-native");

const { StyleSheet, Platform, Dimensions } = React;

const dh = Dimensions.get("window").height;
const dw = Dimensions.get("window").width;

export default {

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 30,
      justifyContent: 'center',
    },
    result: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      height: dh*3/10,
      width: dw*0.98,
      borderColor: 'grey',
      borderWidth: 1,
      padding:10,
    },
    
    keyBoard: {
      height: dh*0.48,
    },
    keyStyl:{
      padding:15,
      alignItems: 'center',
      backgroundColor:'lightgrey',
      margin:dw/50,
      width: dw/5,
      height: dh*0.12,
    },
    keyText:{
      fontSize:20,
      fontWeight: 'bold',
  
    },
   buttonStyl: {
      padding:20,
      backgroundColor: 'green',
      marginRight: 20,
    },
    horizontalAlign: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center'
    },
  
};