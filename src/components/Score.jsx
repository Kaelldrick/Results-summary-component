import '../styles/Score.css'

export function Score({ promedio }) {
  return (
    <section className="card__score">
      <p>Your Result</p>
      <div className='score__circle'>
        <div className='score__number'>
          <p>{promedio}</p>
          <p>of 100</p>
        </div>
      </div>
      <p className='score__state'>Great</p>
      <p className='score__text'>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}