import { MUIMode } from './components/MUI'
import { AppProvider } from './context/Application/Provider'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <MUIMode />
      </div>
    </AppProvider>
  )
}

export default App
