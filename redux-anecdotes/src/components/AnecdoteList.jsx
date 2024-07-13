import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    const filter = state.filter
    console.log('filter is ', filter)
    state.anecdotes.sort((a,b) => b.votes - a.votes)
    console.log(state)
    if (filter === '') 
      return state.anecdotes
      else return (
    state.anecdotes.filter(n=> n.content.toLowerCase().includes(filter))
  )
  })
  
  const vote = (id) => {
      dispatch(addVote(id))
    }
  
    return (
      <div>
      {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
        )}
      </div>
    )
}

export default AnecdoteList