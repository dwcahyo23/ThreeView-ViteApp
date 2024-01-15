import { Routes, Route } from 'react-router-dom'
import Login from './pages/authentication/Login'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus } from './store/liveStatus/LiveStatusSlice'
import { useEffect } from 'react'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStatus())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={<h1>Dashboard</h1>} /> */}
    </Routes>
  )
}
