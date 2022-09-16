import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {flexDirection: "collum"}]}>
      <View style={{marginTop:"100px", 
      marginLeft:"100px",
      height:"100px", 
      width:"100px", 
      border:"10px solid black", 
      borderRadius: "100%"}} 
      />
      <Text style={{ flex: 1, fontSize:30, marginTop:"40px", textAlign:"center", fontWeight:"bold"}}>GROW <br /> YOUR BUSINESS</Text>
      <Text style={{ flex: 1, fontSize:13, marginTop:"40px" ,textAlign:"center", fontWeight:"bold"}}>We will help you to grow your business using online server </Text>
      <View style={[styles.buttonrow, {flexDirection: "row"}]} >
        <TouchableOpacity style={{backgroundColor: "yellow",padding: 10, width: "150px",marginLeft: 20,marginRight: 20,textAlign: "center",}}>
        <Text style={{fontWeight: "bold",}}>Login</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={{backgroundColor: "yellow",padding: 10, width: "150px",marginRight: 20,textAlign: "center",}}>
        <Text style={{fontWeight: "bold",}}>SignUp</Text>
        </TouchableOpacity> 
        </View>
      <Text style={{ flex: 1, fontSize:15, marginTop:"40px", textAlign:"center", fontWeight:"bold"}}>HOW WE WORK ?</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    background:"linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #28F7AC 100%)",
  },
  buttonrow: {
    flex: 0.75,
    justifyContent: 'center',
    color: 'black',
    margin:10,
  },
  
});
