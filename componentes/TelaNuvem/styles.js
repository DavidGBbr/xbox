import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },

    title:{
        fontSize:26,
        color:'#107c0f',
        marginBottom:5,
    },

    description:{
        fontSize:20,
        fontWeight:'bold',
        color:'#b2b2b2',
        marginBottom:20
    },

    paragraph:{
        textAlign:'center',
        marginBottom:10,
        color:'#b2b2b2',
        width:320,
    },
    img:{
        width:320,
        height:180,
        borderRadius:5
    }
})

export default styles;