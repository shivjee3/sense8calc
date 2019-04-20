import React from 'react';
import { Text, View,FlatList,TouchableHighlight,Button } from 'react-native';
import styles from './Styles';

export default class App extends React.Component {
  componentWillMount(){
    
   this.state = {
    "clear": false,
    "result": "",
    "keys":[{key:'1'},{key:'2'},{key:'3'},{key:'/'},{key:'4'},{key:'5'},{key:'6'},{key:'-'},{key:'7'},{key:'8'},{key:'9'},{key:'*'},{key:'.'},{key:'0'},{key:'='},{key:'+'}]}
}

display = (n) =>  {
  if (this.state.clear){
    this.setState({"result":n, "clear": false});
  } else {
    this.setState({"result":this.state.result+n});
  }
    
}

equal() {
  this.setState({"result":eval(this.state.result).toString(), "clear":true});
}

back() {
  this.setState({"result":this.state.result.slice(0,this.state.result.length-1)});
}


clearall() {
  this.setState({"result":""});
} 
  render() {
    
    return (
       <View style={styles.container}>
       <View style={styles.result}><Text style={styles.keyText}>{this.state.result}</Text></View>

      <FlatList
        style={styles.keyBoard}
        numColumns={4}
        data={this.state.keys}
        renderItem={({ item }) => 
        <TouchableHighlight onPress={() => (item.key == '=') ? this.equal() : this.display(item.key)} underlayColor="lightgrey">
        <View style={styles.keyStyl}><Text style={styles.keyText}>{item.key}</Text></View>
        </TouchableHighlight>
        }
      />
      <View style={styles.horizontalAlign}>
        <TouchableHighlight onPress={() => this.back() }><Text style={styles.buttonStyl}>BACK</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.clearall()}><Text style={styles.buttonStyl}>CLEAR</Text></TouchableHighlight>
      </View>
    </View>
    );
  }
}


