import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => 
    axios.get(baseUrl).then(res => res.data)

export const createAnecdotes = (newAnec) => 
    axios.post(baseUrl, newAnec).then(res => res.data)

export const voteAnecdotes = (newAnec) => 
    axios.put(`${baseUrl}/${newAnec.id}`, newAnec).then(res => res.data)