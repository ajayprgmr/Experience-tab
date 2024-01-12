import { useEffect, useState } from 'react'
import './App.css'
import Title from './Title'
import Jobs from './Jobs'
import BtnContainer from './BtnContainer'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const jobs = await response.json()
      setJobs(jobs)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <section className='loader-container'>
        <div className='loader'></div>
      </section>
    )
  }
  return (
    <main>
      <Title text='Experience' />
      <div className='job-center'>
        <div className='left'>
          <BtnContainer
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            jobs={jobs}
          />
        </div>
        <div className='right'>
          <Jobs jobs={jobs} currentItem={currentItem} />
        </div>
      </div>
    </main>
  )
}

export default App
