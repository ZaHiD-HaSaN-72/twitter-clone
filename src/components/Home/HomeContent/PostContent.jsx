import React from 'react'
import Content from './Content'

const PostContent = () => {
    
  return (
    <div>
         <p className=' text-center text-sky-500 py-3 cursor-pointer hover:bg-slate-100'>Show 365 post</p>
      <Content
        title={""}
        img1={"https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"}
        img2={"https://pbs.twimg.com/media/GAcPQ2mWYAAfSby?format=jpg&name=small"}
        Name={"Elon Musk"}
        userName={"elonmusk"}
        date={"16h"}
      />
      <Content
        title={"Would you spend 100 days in this room with a random stranger for $500,000? (Door is unlocked, if one of you leave before day 100 you both lose)"}
        img1={"https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"}
        img2={"https://pbs.twimg.com/media/F7OSTJ3WQAEyGea?format=jpg&name=large"}
        Name={"MrBeast"}
        userName={"MrBeast"}
        date={"2d"}
      />
      <Content
        title={""}
        img1={"https://pbs.twimg.com/profile_images/1636443983990669326/xm-YehdR_400x400.jpg"}
        img2={"https://pbs.twimg.com/media/GAxVrCwaMAATZjp?format=jpg&name=small"}
        Name={"Tyo"}
        userName={"fwtyo"}
        date={"5h"}
      />
      <Content
        title={""}
        img1={"https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"}
        img2={"https://pbs.twimg.com/media/F9b4AXVaEAA8GVy?format=jpg&name=900x900"}
        Name={"Elon Musk"}
        userName={"elonmusk"}
        date={"3d"}
      />
      <Content
        title={""}
        img1={"https://pbs.twimg.com/profile_images/1728410193032257536/iu0opRal_400x400.jpg"}
        img2={"https://pbs.twimg.com/media/GAIBFQ9WgAA6cKV?format=jpg&name=900x900"}
        Name={"Spider Man"}
        userName={"spiderman"}
        date={"Nov 29"}
      />
    </div>
  )
}

export default PostContent
