import PropTypes from 'prop-types'
import './App.css'

function BtnContainer({ currentItem, setCurrentItem, jobs }) {
  const handleClick = (key) => {
    setCurrentItem(key)
  }

  // // Log the entire jobs array
  // console.log(`from btn: ${currentItem}`)

  return (
    <div className='btn-container'>
      {jobs.map((job, index) => (
        <button
          key={job.order}
          onClick={() => handleClick(index)}
          className={currentItem == index ? 'btn-active' : 'btn'}
        >
          {job.company}
        </button>
      ))}
    </div>
  )
}

BtnContainer.propTypes = {
  currentItem: PropTypes.number.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      duties: PropTypes.arrayOf(PropTypes.string).isRequired,
      company: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default BtnContainer
