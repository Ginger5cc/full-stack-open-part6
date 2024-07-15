import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

const anecSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addVote (state, action) {
      const changedNote = action.payload
      return state.map( note => note.id !== changedNote.id ? note : changedNote)
    },

    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const {
  addVote,
  addNewAnecdote,
  appendAnecdote,
  setAnecdote } = anecSlice.actions

export const initializeAnec = () => {
  return async dispatch => {
    const response = await anecdoteService.getAll()
    dispatch(setAnecdote(response))
  }
}

export const addNewAnec = (content) => {
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export const addNewVote = (id) => {
  return async dispatch => {
    const newVote = await anecdoteService.newVote(id)
    dispatch(addVote(newVote))
  }
}

export default anecSlice.reducer

