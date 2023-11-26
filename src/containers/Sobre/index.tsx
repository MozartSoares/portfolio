import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      consequuntur quas saepe omnis maiores earum. Soluta blanditiis dolores
      eius dolorem ex, quibusdam magnam, iure, consectetur veniam ab obcaecati
      quisquam? Alias.
    </Paragrafo>
    <GithubSecao>
      <img
        alt="github stats"
        src="https://github-readme-stats.vercel.app/api?username=MozartSoares&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        alt="Most used languages"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=MozartSoares&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)
export default Sobre
