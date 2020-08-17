import React from 'react';
import { Text, View } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ExchangeScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      userId:firebase.auth().currentUser.email,
      ItemName:"",
      Description:""
    }

  }
  render(){
    return(
        <View style={{flex:1}}>
           <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Item Name"}
                onChangeText={(text)=>{
                    this.setState({
                      ItemName:text
                    })
                }}
                value={this.state.ItemName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Description"}
                onChangeText ={(text)=>{
                    this.setState({
                      Description:text
                    })
                }}
                value ={this.state.Description}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.ItemName,this.state.Description)}}
                >
                <Text>Add Item</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}