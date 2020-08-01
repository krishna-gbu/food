import axios from 'axios'


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer M0VBCa9JfKMevT92NkP3RdcIsX6FzDtX9_3TG3EGxXASn9Nq44RMUjK-T7IdJNWFUofSfVJHsucs-o-Tkz4TeOdjwGQyhDnw4sRyMISCkV45_scyNWs6LB5QXCXwXnYx'
    }
})

