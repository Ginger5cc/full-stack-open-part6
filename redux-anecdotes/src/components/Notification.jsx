import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notifications)
  console.log('notification is', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20
  }

  if (notification === null) 
    return null
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification