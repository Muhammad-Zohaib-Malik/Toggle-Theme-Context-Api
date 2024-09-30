import DarkLight from "./component/DarkLight"
import { ThemeProvider } from "./contextApi"


const App = () => {
  return (
    <ThemeProvider>
      <DarkLight/>
    </ThemeProvider>
  )
}

export default App