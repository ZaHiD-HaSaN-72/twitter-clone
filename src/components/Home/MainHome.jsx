
import HomeRight from "../Home/Shared/HomeRight"
import { Outlet } from "react-router-dom"


function MainHome() {
  
  return (
    <>
      <div className=" flex">
      <div className=" w-[37.4rem] border-x-[1px]  ">
      
        {/* <HomeLeft/> */}
        <Outlet/>
      </div>
      <div className=" w-[21rem] ml-7 relative">
        
        <HomeRight/>

      </div>
      
      </div>
    </>
  )
}
 
export default MainHome
