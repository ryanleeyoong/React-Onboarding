import Title from '../../atoms/display/Title'
import Description from '../../atoms/display/Description'

const HeaderHome = ({title, desc}) => {
  return (
    <header>
          <Title title={title} style={"pt-16 pb-5 w-50 text-center text-indigo-900 font-bold text-4xl"}/>
          <Description desc={desc} style={"pb-10 text-center text-black"}/>
    </header>
  )
}

export default HeaderHome