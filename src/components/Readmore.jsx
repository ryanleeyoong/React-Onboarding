import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Readmore = ({text, id}) => {
  return (
    <div>
      <Link to={'/Inner/'+ id}>
        <button className="readBtn pl-6 pt-2">{text}</button>
      </Link>
    </div>
  )
}

export default Readmore