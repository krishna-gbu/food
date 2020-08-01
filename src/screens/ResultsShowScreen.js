import React, { useState, useEffect } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import yelp from '../api/yelp'


const ResultsShowScreen =({navigation})=>{
    const [result ,setResult] = useState(null);
   const id= navigation.getParam('id');

//    console.log(navigation)
    // console.log(id)
    // console.log(result)

   
    const getResult= async(id)=>{
          const response = await yelp.get(`/${id}`)
          setResult(response.data);
    }

    useEffect(()=>{
       getResult(id)
    },[])

    return <View>
        <Text>  Results Show Screen</Text>
    </View>
}


const style=StyleSheet.create({

})

export default ResultsShowScreen;