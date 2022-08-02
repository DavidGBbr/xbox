import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e6e6e6'
    },

    card:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    consoleImg:{
        width:200,
        height:200,
    },

    title:{
        textTransform:'uppercase',
        fontSize:34,
        fontWeight:'bold',
        color:'#107c10',
        marginBottom:5,
    },

    subtitle:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:10,
    },

    description:{
        textAlign:'center',
        fontSize:16
    }
});

export default styles;