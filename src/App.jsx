import './App.css'
import { Score } from './components/Score'
import { Summary } from './components/Summary'

function App({ data }) {

  const sumOfScores = data.reduce((acumulador, elemento) => {
    const score = elemento.score;
    return acumulador + score;
  }, 0);

  const average = Math.round(sumOfScores / data.length);

  return (
    <div className='card'>
      <Score promedio={average} />
      <Summary data={data} />
    </div>
  )
}

export default App
