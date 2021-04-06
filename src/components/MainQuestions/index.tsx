import { Container, Question } from './styles'

import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';

export const MainQuestions: React.FC = () => {

  return (
    <Container>
      <div>
        <h1>Título 3</h1>
        <div>
          <Question>
            <strong>Pergunta 1 ?</strong>
            <input placeholder="Digite a resposta" type="text" name="q1" id="q1"/>
          </Question>

          <Question>
            <strong>Pergunta 2 ?</strong>
            <input placeholder="Digite a resposta" type="text" name="q2" id="q2"/>
          </Question>
          
          <Question>
            <strong>Pergunta 3 ?</strong>
            <label htmlFor="question-options" />

            <select name="question-options" id="question-options">
              <option value="" disabled selected>Selecione</option>
              <option value="option 01">option 01</option>
              <option value="option 02">option 02</option>
              <option value="option 03">option 03</option>
            </select> 
          </Question>

          <button type="button">
            <SearchIcon />
            <span>Buscar.....</span>
          </button>
          
        </div>
      </div>
    </Container>
  )
}