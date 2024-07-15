import { useSelector, useDispatch } from 'react-redux'
import { addNewVote } from '../reducers/anecdoteReducer'
import {  } from '../reducers/anecdoteReducer'
import { createSelector } from 'reselect'
import { setNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const dispatch = useDispatch()

  //try to use createSelector
    const memorizedAnecdotes = createSelector(
    [state => state.filter, state => state.anecdotes],
    (filter, anecdote) => {return anecdote.filter(n=> n.content.toLowerCase().includes(filter))
      .sort((a,b) => b.votes - a.votes)
    }
  ) 
  
  const aa = useSelector(state => memorizedAnecdotes(state))
  //console.log('aa is', aa)
  
  const vote = (id, content) => {
      dispatch(addNewVote(id))
      dispatch(setNotification(`you voted '${content}'`, 5000))
    }
  
  return (
    <div>
    {aa.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
      </div>
    </div>
      )}
    </div>
  )
}


/* try to use connect
  const mapStateToProps = (state) => {
    return {
        filter: state.filter,
        anecdotes: state.anecdotes,
    }   
} connect(mapStateToProps)()*/
export default AnecdoteList