import axios from "axios";

const baseUrl = 'http://127.0.0.1:3001/persons'
const getAll=()=>axios.get(baseUrl).then(res=>res.data)
const createNew =(newObj)=>axios.post(baseUrl, newObj).then(res=>res.data)


const mid={getAll, createNew}
export default mid