import { addNewAnec } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addNote = async(event) => {
    event.preventDefault()
    const content = event.target.newanecdote.value
    event.target.newanecdote.value = ''
    dispatch(addNewAnec(content))
    dispatch(setNotification(`you created a new anecdote '${content}'`, 5000))
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