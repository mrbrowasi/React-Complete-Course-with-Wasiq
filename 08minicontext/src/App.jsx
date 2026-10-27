import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  return (
    <div>
    <UserContextProvider> 
      <Login/>
      <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App
