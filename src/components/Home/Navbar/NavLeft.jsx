import { Link } from 'react-router-dom'


function NavLeft(props) {
 const {style1, style2} = props;
  return (
    <>
      <div className='  py-2 fixed backdrop-blur-xl bg-[#ffffffa6]	 w-[37.4rem] z-50'>
        <Link  to="/home/foryou" className=' py-4 px-[6.5rem] font-bold hover:bg-gray-100  '>
          <span style={style1}  className=' py-4 '>For you</span>
        </Link>
        <Link  to="/home/follow" className=' py-4 px-[6.5rem] font-bold hover:bg-gray-100 '>
          <span style={style2}  className=' py-4' >Following</span>
        </Link>
        <Link to="" className='fa-solid fa-gear ml-1 p-3 rounded-full hover:bg-slate-200' title='Timeline setting'>

        </Link>
      </div>
      
    </>
  )
}

export default NavLeft