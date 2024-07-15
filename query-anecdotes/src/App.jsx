import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, voteAnecdotes } from './request'
import { useContext } from 'react'
import NotificationContext from './NotificationContext'

const App = () => {
  const [message, dispatch] = useContext(NotificationContext)

  const queryClient = useQueryClient()

  const voteAnec = useMutation({
    mutationFn: voteAnecdotes,
    onSuccess: (newVote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const addVoteAnec = anecdotes.map(n => n.id === newVote.id? newVote : n)
      queryClient.setQueryData(['anecdotes'], addVoteAnec)
      dispatch({type: 'UPDATE', payload: `anecdote '${newVote.content}' voted`})
      setTimeout(() => {dispatch({type: 'REMOVE'})}, 5000)
    },
  })

  const handleVote = (anecdote) => {
    voteAnec.mutate({...anecdote, votes: anecdote.votes + 1})
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1
  })

  //console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
