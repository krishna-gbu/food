import {useEffect ,useState} from 'react'
import yelp from '../api/yelp'


export default () =>{
    const [results , setResult] = useState([]);
    const searchApi = async (term) => {
     try {
        // yelp.get('/search') //yelp.get('http://......../search')
      const responce = await yelp.get('/search',{
          params:{
              limit:50, //search?limit=50
              term,
              location:'san jose'
          }
      });  
      setResult(responce.data.businesses)
     } catch(err){
         console.log(err)
        
     }
 }


          useEffect(()=>{
          searchApi('pasta')
          },[]);


      return [searchApi,results]

}