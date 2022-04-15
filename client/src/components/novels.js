import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Novels = () => {
  const [title, setTitle] = useState('')
  const [novels, setNovels] = useState([])
  const [filteredNovels, setFilteredNovels] = useState([])

  useEffect(() => {
    const fetchNovels = async () => {
      const fetchedData = await axios.get('http://localhost:1337/api/novels/')

      setNovels(fetchedData.data)
      console.log(fetchedData)
    }
    fetchNovels()
  }, [])

  useEffect(() => {
    const searchedNovels = novels.filter(novel => novel.title.toLowerCase().includes(title.toLocaleLowerCase()))
    setFilteredNovels(searchedNovels)
  }, [novels, title])

  return (
    <div>
       <input type= "text" onChange={(event) => setTitle(event.target.value)} />
       <div>{title}</div>
       {filteredNovels.map(novel => {
         return (
         <div>
             <h2>{novel.title + ' by ' +
               novel.author.nameFirst + ' '
               + novel.author.nameLast}</h2>
           </div>
         )
       })}
    </div>
  )
}

export default Novels