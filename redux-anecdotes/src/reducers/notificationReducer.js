import { createSlice } from '@reduxjs/toolkit'

const initialState=null

const notificationSlice = createSlice ({
  name: 'notification',
  initialState,
  reducers: {
    addNotification (state, action) {
        return action.payload
    },
    removeNotifcaiton (state, action) {
        return null
    }
  }
})

export const { addNotification, removeNotifcaiton } = notificationSlice.actions

export const setNotification = (content, time) => {
  return dispatch => {
    dispatch(addNotification(content))
    setTimeout( ()=> {dispatch(removeNotifcaiton())}, time)
  }
}

export default notificationSlice.reducer