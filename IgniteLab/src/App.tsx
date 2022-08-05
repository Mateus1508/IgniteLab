import {Event} from './pages/Event'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { Router } from './Router'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
