import { useRef } from 'react'

const Searchbar = ({email, searchKeyword}) => {
    const inputEl = useRef(null);

    const getSearchEmail = () => {
        searchKeyword(inputEl.current.value)
    }

  return (
    <input className="w-96 h-8 pl-6 rounded border-2 border-indigo-900 mb-10" ref={inputEl} type="text" placeholder="Search Email" value={email} onChange={getSearchEmail}></input>
  )
} 

export default Searchbar