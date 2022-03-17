const Header = ({title, desc}) => {
    return (
      <header>
          <h1 className="pt-16 pb-5 w-50 text-center text-indigo-900 font-bold text-4xl">
              {title}
          </h1>
          <p className="pb-10 text-center text-black">
              {desc}
          </p>
      </header>
    )
  }
  
  export default Header