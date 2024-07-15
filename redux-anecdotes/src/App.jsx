import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import AnecdoteList from './components/AnecdoteList'
import { initializeAnec } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import Notification from './components/Notification'

const App = () => {
const dispatch = useDispatch()
useEffect(() => {
  dispatch(initializeAnec())
}, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App