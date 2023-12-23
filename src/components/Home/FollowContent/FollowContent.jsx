import React from 'react'
import Content from '../HomeContent/Content'
import NavLeft from '../Navbar/NavLeft'

function FollowContent() {

  const style1 = {

    
    opacity: "50%",
  };
  const style2 = {
    borderBottom: '4px solid #1d9bf0',

  };

  return (
    <>
      <Content
      title={"Hobie Brown disrupts the system this February in a new 'Spider-Punk' #1 Foil Variant Cover by Ian Bertram. 🤘 Read more now: https://bit.ly/46BuYDZ"} 
      img1={"https://pbs.twimg.com/profile_images/1728410193032257536/iu0opRal_400x400.jpg"} 
      img2={"https://pbs.twimg.com/media/GAIBFQ9WgAA6cKV?format=jpg&name=900x900"} 
      Name={"Spider Man"} 
      userName={"spiderman"} 
      date={"Nov 29"}
      />
      
      <Content 
      img1={"https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"} 
      img2={"https://pbs.twimg.com/media/F7OSTJ3WQAEyGea?format=jpg&name=large"} 

      Name={"MrBeast"} 
      userName={"MrBeast"}
      date={"2d"}
      />
      
      <Content
       img1={"https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"} 
       img2={"https://pbs.twimg.com/media/GAcPQ2mWYAAfSby?format=jpg&name=small"} 
       Name={"Elon Musk"} 
       userName={"elonmusk"}
       date={"16h"}
        />
      
      <Content 
      img1={"https://pbs.twimg.com/profile_images/1636443983990669326/xm-YehdR_400x400.jpg"} 
      img2={"https://pbs.twimg.com/media/GAxVrCwaMAATZjp?format=jpg&name=small"} 
      Name={"Tyo"} 
      userName={"fwtyo"}
      date={"5h"}
      />
      
      <Content 
      img1={"https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"} 
      img2={"https://pbs.twimg.com/media/F9b4AXVaEAA8GVy?format=jpg&name=900x900"} 
      Name={"Elon Musk"} 
      userName={"elonmusk"} 
      date={"3d"}
      />
    </>
  )
}

export default FollowContent
