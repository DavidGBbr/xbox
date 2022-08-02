import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#121212',
        padding:20,
    },

    title:{
        fontSize:26,
        fontWeight:'bold',
        color:'#107c0f',
        marginBottom:5
    },

    description:{
        color:'#b2b2b2',
        textAlign:'center',
        width:320,
        marginBottom:25,
    },

    box:{
        width:320,
        marginBottom:50,
    },

    card:{
        width:320,
        height:180,
        marginBottom:10
    },

    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff',
        paddingHorizontal:15,
        paddingVertical:5,
        opacity:0.5,
        backgroundColor:'black'
    },

    paragraph:{
        color:'#d5d5d5'
    }

});

export default styles;