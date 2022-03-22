import Title from '../../atoms/display/Title'
import Description from '../../atoms/display/Description'
import News1 from '../../../assets/news1.jpg'

const HeaderInner = ({title, desc}) => {
  return (
    <header>
          <Title title={title} style={"pt-16 pb-5 pl-80 ml-80 w-3/5 text-center text-indigo-900 font-bold text-4xl"}/>
          <div className="pl-96 ml-96">
              <img className="m-10" src={News1} height={800} width={900} />
            </div>
          <Description desc={desc} style={"pb-10 pl-80 ml-80 w-3/5 text-center text-black"}/>
          <hr className="pl-96 ml-96 border-grey my-10 w-4/6"></hr> 
    </header>
  )
}

export default HeaderInner