import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2d2e2d'
    },

    logo:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:10
    },

    title:{
        fontSize:26,
        fontWeight:'bold',
        color:'#107c0f',
        marginBottom:5,
    },

    description:{
        textAlign:'center',
        color:'#b2b2b2',
        width:320,
        marginBottom:25
    },

    card:{
        width:250,
        alignItems:'center',
        backgroundColor:'#107c0f',
        flexDirection:'row',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:20,
    },

    icon:{
        width:80,
        height:80,
        borderRadius: 100,
        marginBottom: 10,
        marginRight: 10,
    },

    cardText:{
        fontSize:18,
        color:'#fff',
        textAlign:'left',
        width:100
    }
})

export default styles;