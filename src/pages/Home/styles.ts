
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
      padding:0,
      
    },
    header:{
        height:100,
        width:'100%',
        backgroundColor:'#222',
        color:'#fff',
        paddingTop:30,
    },
  
    box:{
      width:'100%',
      backgroundColor: '#333',
      display: 'flex',
      flexDirection:'column',
      flex:1,
      
    },
    detalhes:{
        color: '#fff',
        padding:20,
        fontSize:22,
        fontStyle:'normal'
    },
     

    

    inputForm:{
      padding:16,
      color:'#eee',
      backgroundColor:'#777',
      flex:1,
      marginRight:8,
      borderRadius:6
    },
    ButtonForm:{
      backgroundColor:'#008000',
      padding:10,
      color:'#fff',
      width:56,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:6
    },
    ButtonText:{
      color:'#fff'
    }

  });