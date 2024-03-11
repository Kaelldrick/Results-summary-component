import '../styles/Summary.css'

export function Summary({ data }) {
  
  const score = data.map(element =>
    <tr key={element.category} className={(element.category).toLowerCase()}>
      <td><img className={(element.category).toLowerCase()} src={element.icon} alt={element.category} />{element.category}</td>
      <td><b>{element.score}</b> <span>/ 100</span></td>
    </tr>
  )
  return (
    <section className="card__summary">
      <p>Summary</p>
      <table className='summary__table'>
        <tbody>
          {score}
        </tbody>
      </table>
      <button className='summary__button'>Continue</button>
    </section>
  )
}