import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar/'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import TemaLight from './themes/light'
import TemaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
