import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.newanecdote.value
    event.target.newanecdote.value = ''
    dispatch(addNewAnecdote(content))
  }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addNote}>
          <div><input name='newanecdote'/></div>
          <button type="submit">create</button>
        </form>
      </div>
    )
}

export default AnecdoteForm