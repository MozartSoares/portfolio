import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card } from './styles'
import { LinkBotao } from './LinkBotao'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
