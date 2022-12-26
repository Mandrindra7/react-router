import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const Careers: React.FC = () => {
    const careers: Career[] = useLoaderData() as Career[]
  return (
    <div className='careers'>
        {
            careers?.map((career: Career) => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default Careers 

export interface Career {
    id:number
    title: string
    salary: string
    location: string
}

export const getCareers = async () => {
    const res = await fetch('http://localhost:4000/careers')

    return res.json()
}