import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

 // const [data, setData] = useState([])

  // TODO: Fetch Github followers data and display it here
  // useEffect(() => {
  //   fetch('https://api.github.com/users/maheshshinde03')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // })

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img className='w-16 h-16 mx-auto' src={data.avatar_url} alt='avatar' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/maheshshinde03')
  return response.json()
}