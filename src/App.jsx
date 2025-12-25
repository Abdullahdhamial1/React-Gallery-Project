import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {


  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=36`)

    setUserData(responce.data)

  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading.....</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='flex flex-col bg-black overflow-auto min-h-screen p-4 text-white'>
      <div className='flex  flex-wrap gap-4 p-2 flex-1 overflow-auto justify-center'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button
        style={{opacity: index == 1 ? 0.4 : 1}}
        onClick={()=>{
          if(index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 rounded'>
          Prev
        </button>
        <button className='bg-black text-white px-4 py-2 rounded'>Page {index}</button>
        <button
        onClick={()=>{
          setUserData([])
          setIndex(index + 1)
        }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 rounded'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App