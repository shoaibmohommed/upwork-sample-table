import './App.css'
import { useRoutes } from 'react-router'
import routes from './config/routes'

function App() {
  const content = useRoutes(routes);
  return content;

}

export default App
