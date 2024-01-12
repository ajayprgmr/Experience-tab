import './App.css'
import { v4 as uuidv4 } from 'uuid'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import PropTypes from 'prop-types'

function Duties({ duties }) {
  return (
    <>
      {duties.map((duty) => {
        const id = uuidv4() // Move this line here
        return (
          <div className='duties-container' key={id}>
            <MdOutlineKeyboardDoubleArrowRight className='right-arrow' />
            <p className='duties'>{duty}</p>
          </div>
        )
      })}
    </>
  )
}

Duties.propTypes = {
  duties: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Duties
