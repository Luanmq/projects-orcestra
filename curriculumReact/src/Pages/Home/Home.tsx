import './styles.css'

const Home = () => {
  return (
    <div className="container-body">
      <div className="container-header">
        <div>
          <img
            className="foto" src="https://avatars.githubusercontent.com/u/88345670?v=4"
            alt="Luan Melo"
          />
        </div>
        <div>
          <h1>Luan Melo</h1>
          <p>
            Engenharia de Software (UnB)
            <br />
            luanmelo.q@gmail.com
            <br />
            20 anos
          </p>
        </div>
      </div>

      <div>
        <h2>Quem sou eu?</h2>
        <p>
          Meu nome é Luan Melo Queiroz, moro em Brasília (DF), tenho 20 anos e
          sou formado em Design gráfico pelo Centro Universitário Iesb e estou
          cursando Engenharia de Software pela Universidade de Brasília (UnB) no
          Campus do Gama.
        </p>
        <p>
          Sempre gostei de me envolver em Projetos e Trabalhos em equipe.
          Durante o Ensino Médio participei como Diretor de Marketing no projeto
          de Miniempresas da Junior Achievement Brasil e como Competidor no
          Torneio de Robótica FLL.
        </p>
        <p>
          Graças ao envolvimento nesses programas foi possível aprimorar o
          Trabalho em equipe, Apresentação e Desenvolvimento de Pesquisas sobre
          diversos temas. Durante essas experiências aprofundei meu interesse
          pelas áreas de Desenvolvimento de Projetos e me aventurei no Design
          Gráfico e na Engenharia de Software procurando explorar ao máximo meu
          Potencial Criativo.
        </p>
        <hr />
      </div>

      <div>
        <h2>Experiências</h2>
        <ul>
          <li>
            <h3>Designer Gráfico</h3>
            <i>
              Produção de material para Redes Sociais, Criação de Identidade
              Visuais para diversos eventos e Administração e Design de Sites
            </i>
          </li>

          <ul>
            <li>
              <b> Federação Espírita do Distrito Federal</b>
              <br /> 2021 - Atual
            </li>
            <li>
              <b> Freelancer</b>
              <br /> 2019 - 2021
            </li>
          </ul>

          <li>
            <h3>Trabalho Voluntário</h3>
            <i>
              Auxílio na produção de peças gráficas, Arrecadação de recursos e
              Colaboração em outras áreas
            </i>
          </li>

          <ul>
            <li>
              <b> Instituto Espírita Assistencial Emmanuel</b>
              <br /> 2017 - Atual
            </li>
          </ul>
        </ul>
        <hr />
      </div>

      <div>
        <h2>Formacão</h2>
        <ul>
          <li>
            <h3>Universidade de Brasília (Campus Gama)</h3>
            <i>
              Formação de Engenheiro com perfil generalista em software
              aprendendo cada etapa da produção de um sistema
            </i>
          </li>

          <ul>
            <li>
              <b> Engenharia de Software</b>
              <br /> 2021 - Atual
            </li>
          </ul>

          <li>
            <h3>Centro Universitário Iesb</h3>
            <i>
              Aprendizado nas áreas de Análise Visual, Identidade Visual, Design
              Editorial e Web Design
            </i>
          </li>

          <ul>
            <li>
              <b> Tecnólogo em Design gráfico</b>
              <br /> 2020 - 2021
            </li>
          </ul>

          <li>
            <h3>SENAI Gama</h3>
            <i>
              Curso voltado ao Aprendizado de Softwares e Produção de peças
              gráficas e audiovisuais
            </i>
          </li>

          <ul>
            <li>
              <b> Técnico em Produções Multimídias</b>
              <br /> 2017 - 2019
            </li>
          </ul>
        </ul>
        <hr />
      </div>

      <div>
        <h2>Contato</h2>
        <nav>
          <a href="https://www.instagram.com/luanmeloq/" target="new">
            <i>Instagram</i>
          </a>
          <a href="https://www.linkedin.com/in/luan-melo-queiroz/" target="new">
            {' '}
            <i>Linkedin</i>{' '}
          </a>
          <a href="https://www.behance.net/luanmeloq" target="new">
            {' '}
            <i>Behance</i>{' '}
          </a>
          <a href="https://github.com/Luanmq" target="new">
            <i>Github</i>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Home
