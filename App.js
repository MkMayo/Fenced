import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, InputAccessoryView, GestureHandlerRootView} from 'react-native';
import StopWatch from './stopwatch';
import Timer from './timer';
import { Image } from 'react-native';




export default class App extends React.Component{



  state = {
    value: 0,
    value1: 0,
    yellowtext: 0,
    yellowtext1 :0,
    timer: null,
    counter: '00',
    miliseconds: '00',
    startDisabled: true,
    stopDisabled: false
  }

  

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
    })
    console.log(this.state.value + 1)
  }
  
  decrementValue = () => {
    this.setState({
      value: this.state.value -1,
    })
    console.log(this.state.value -1)
  } 

  incrementValue1 = () => {
    this.setState({
      value1: this.state.value1 + 1,
    })
    console.log(this.state.value1  + 1)
  }
  
  decrementValue1 = () => {
    this.setState({
      value1: this.state.value1 -1,
    })
    console.log(this.state.value1 -1)
  } 

  yellowValue = () => {
    this.setState({
      yellowtext: this.state.yellowtext + 1
    })
  }


  yellowValue1 = () =>{
    this.setState(
      {
        yellowtext1: this.state.yellowtext1 + 1
      }
    )
  }

  



  render () {
  
    return (
    <View style={styles.container}>
     
     <View style={{top: 100, right: -20 }} >
     <Text style={{fontSize:100, marginBottom:-20, color: '#FA4616'}} > {this.state.value} </Text>
     <Text></Text>
     <StatusBar style="auto" />
     <View style = {{flexDirection:'row'}}>
     <View style ={{width: '10%', backgroundColor: 'black', borderRadius: 8, color: 'red'}}>
      <Button onPress={this.decrementValue} title="-" color={"red"}/>
      </View>
      <Text>  </Text>
      <View style ={styles.button} >
      <Button style = {{color:'green'}} onPress={this.incrementValue} title="+" color={"green"}/>
      </View>
      <View style={{top: 40, right: 38,  width: '10%', backgroundColor: 'black', borderRadius: 8,color: '#90A4AE'}}>
      <Button onPress={this.yellowValue} title="Y" color={"yellow"}/>
      </View>
      <View>
      <Text>{this.yellowtext}</Text>
      </View>
      <View style={{top: 40, right: 123,  width: '10%', backgroundColor: 'black', borderRadius: 8,color: '#90A4AE'}} >
      <Button onPress={this.incrementValue1} title="R" color={"red"} backgroundColor="black"/>
     </View>
      </View>
     </View>

     <View style={{top: -50, right: -265 }} >
     <Text style={{fontSize:100, marginBottom:-20, color: '#0021A5'}} > {this.state.value1} </Text>
     <Text> </Text>
     <StatusBar style="auto" />
     <View style = {{flexDirection:'row'}}>
     <View style ={styles.button}>
      <Button onPress={this.decrementValue1} title="-" color={"red"}/>
      </View>
      <Text>  </Text>
      <View style ={styles.button} >
      <Button onPress={this.incrementValue1} title="+" color={"green"}/>
      </View>
      <View style={{top: 40, right: 40,  width: '10%', backgroundColor: 'black', borderRadius: 8,color: '#90A4AE'}}>
      <Button onPress={this.yellowValue1} title="Y" color={"yellow"}/>
      </View>
      <View style={{top:40 , right:126 ,  width: '10%', backgroundColor: 'black', borderRadius: 8,color: '#90A4AE'}} >
      <Button onPress={this.incrementValue} title="R" color={"red"} backgroundColor="black"/>
     </View>
      </View>
     </View>

     <View style={{top:-160 , right:-145}}>
        <Text style={{fontSize:20, marginBottom:-20, color: 'yellow'}}> {this.state.yellowtext} </Text>
      </View>

      <View style={{top:-162 , right:-220}}>
        <Text style={{fontSize:20, marginBottom:-20, color: 'yellow'}}> {this.state.yellowtext1} </Text>
      </View>
    
    <View style = {{top:50 , right:-120}}>
    <Timer/>
    </View>

    <View>
    <Image source={require('./gator.png')} style={{width: 200, height: 200, right:-100,top:40}} />
    </View>
    
      
    </View>
   );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
    
  },

  button:{
    width: '10%', backgroundColor: 'black', borderRadius: 8,color: '#90A4AE'
  },

  timer:{
    color:'white'
  }
  

});
