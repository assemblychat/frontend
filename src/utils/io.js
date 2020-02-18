import io from 'socket.io-client'

import { BACKEND_URL } from 'utils/apis'
import { getAuthToken } from 'utils/auth'

const socket = io(BACKEND_URL, {
  transports: ['websocket', 'polling'],
  query: {
    sessionToken: getAuthToken(),
  },
})

export const connectSocket = () => {
  const token = getAuthToken()

  socket.on('connect', () => console.log('connected'))
  socket.on('disconnect', () => console.log('disconnected'))
}
