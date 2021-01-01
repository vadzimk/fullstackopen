import axios from "axios";

const baseUrl = 'http://127.0.0.1:3001/persons'
const getAll = () => axios.get(baseUrl).then(res => res.data)
const createNew = (newObj) => axios.post(baseUrl, newObj).then(res => res.data)
const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`).then(res => res.status)


const mid = {getAll, createNew, deletePerson}
export default mid