import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 

const SearchBar =({term ,onTermChange,onTermSubmit})=>{  
    return <View 
    style={style.backgroundStyle}>
    <Fontisto name="search" style={style.iconstyle} />
    <TextInput 
    style={style.inputstyle} 
    placeholder='Search' 
    autoCapitalize='none'
    autoCorrect={false}
    value = {term}
    onChangeText={onTermChange}
    onEndEditing={onTermSubmit}
    />
    </View>
    }

const style=StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        alignItems:'center'
    },
    inputstyle:{
     flex:1,
     height:40,
     fontSize:20
    },
    iconstyle:{
        fontSize:25,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default SearchBar;