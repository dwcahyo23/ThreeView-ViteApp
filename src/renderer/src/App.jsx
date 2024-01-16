import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getStatus } from './store/liveStatus/LiveStatusSlice'
import { useEffect } from 'react'

import Index from './Components/Index'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStatus()).then((action) => {
      console.log(action)
    })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  )
}
