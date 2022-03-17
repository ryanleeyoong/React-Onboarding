import {Link} from 'react-router-dom'

const Backbtn = ({text}) => {
  return (
    <div>
      <Link to={'/'}>
        <button className="readBtn pt-10">
            {text}
        </button>
      </Link>
    </div>
  )
}

export default Backbtn