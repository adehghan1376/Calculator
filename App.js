/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      {/*////////  1 Row  //////////////////*/}
        <View style={{flex:2,flexDirection:'row',padding:3}}>
        <View style={{flex:1}}>
        <Text style={{backgroundColor:'#ffcfba',flex:1}}>0</Text>
        </View>        
        
        </View>
      {/*////////  End of 1 Row  ///////////////////////////////////////*/}

      {/*////////  2 Row  //////////////////*/}
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>MC</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>MR</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>MS</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>M+</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>M-</Text>
          </View>
        </View>
      {/*////////  End of 2 Row  ///////////////////////////////////////*/} 
      {/*////////  3 Row  //////////////////*/}
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>backspace</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>CE</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>C</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>+-</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>SQRT</Text>
          </View>
        </View>
      {/*////////  End of 3 Row  ///////////////////////////////////////*/} 
      {/*////////  4 Row  //////////////////*/}
      <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>7</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>8</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>9</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>/</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>%</Text>
          </View>
        </View>
      {/*////////  End of 4 Row  ///////////////////////////////////////*/} 
      {/*////////  5 Row  //////////////////*/}
      <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>4</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>5</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>6</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>*</Text>
          </View>
          <View style={{flex:1,flexDirection:'column',padding: 3}}>
          <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>1/X</Text>
          </View>
        </View>
      {/*////////  End of 5 Row  ///////////////////////////////////////*/} 
      {/*////////  6 & 7  Row  //////////////////*/}
       <View style={{flex:2,flexDirection:'row'}}>
          {/*6&7 started*/}
          <View style={{flex:4,flexDirection:'column'}}>
            {/*6 started*/}
            <View style={{flex:1,flexDirection:'row'}}>
            
            <View style={{flex:1,flexDirection:'column',padding: 3}}>
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>1</Text>
            </View>
            <View style={{flex:1,flexDirection:'column',padding: 3}}>
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>2</Text>
            </View>
            <View style={{flex:1,flexDirection:'column',padding: 3}}>
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>3</Text>
            </View>
            <View style={{flex:1,flexDirection:'column',padding: 3}}>
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center'}}>-</Text>
            </View>
            
            </View>
            {/*6 ended*/}
            <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:2,flexDirection:'column'}}> 
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center',margin:3}}>0</Text>
            </View>
            <View style={{flex:1,flexDirection:'column'}}>
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center',margin:3}}>.</Text>
            </View>
            <View style={{flex:1,flexDirection:'column'}}>
              <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center',margin:3}}>+</Text>
            </View>            
            </View>

            
          </View>
          {/*6&7 ended*/}
          <View style={{flex:1,flexDirection:'column',padding: 0}}>
            <Text style={{backgroundColor:'#ffcfba',flex:1,textAlign:'center',textAlignVertical:'center',margin:3}}>=</Text>
          </View>
        </View>
      {/*////////  End of 6 & 7 Row  ///////////////////////////////////////*/} 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
