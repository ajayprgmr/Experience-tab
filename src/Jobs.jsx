import './App.css'
import PropTypes from 'prop-types'
import Duties from './Duties'
function Jobs({ jobs, currentItem }) {
  const { title, dates, duties, company } = jobs[currentItem]
  // console.log(`from jobs ${currentItem}`)
  return (
    <div className='job-info'>
      <h3 className='designation'>{title}</h3>
      <h5 className='company'>{company}</h5>
      <h6 className='date'>
        <span>{dates}</span>
      </h6>
      <Duties duties={duties} />
    </div>
  )
}

Jobs.propTypes = {
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
  currentItem: PropTypes.bool.isRequired,
}

export default Jobs
