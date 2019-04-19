import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const LButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style = {styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
                                 marginTop:15,
                                 height:45,
                                 flexDirection: 'column',
                                 justifyContent: 'center',
                                 marginBottom:15,
                                 width:250,
                                 marginHorizontal: 45,
                                 borderRadius:30,
                                 backgroundColor: "#734F96",
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
    }
})

export { LButton };
