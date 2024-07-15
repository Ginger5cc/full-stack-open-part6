import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdotes } from '../request'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const newAnecdote = useMutation({
    mutationFn: createAnecdotes,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], notes.concat(newNote))
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdote.mutate({content, votes: 0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
