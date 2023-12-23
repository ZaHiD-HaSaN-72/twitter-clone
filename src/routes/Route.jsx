
import { createBrowserRouter } from 'react-router-dom';
import MainHome from '../components/Home/MainHome';
import Layout from '../components/Home/Layout/Layout';
import HomeLeft from '../components/Home/Shared/HomeLeft';
import FollowContent from '../components/Home/FollowContent/FollowContent';
import Explore from '../components/Shared/Explore/Explore';
import ListMain from '../components/Shared/List/ListMain';
import Notification from '../components/Shared/Notification/Notification';
import Profile from '../components/Shared/Profile/Profile';
import PostContent from '../components/Home/HomeContent/PostContent';




const Route = createBrowserRouter([
    

   {

       
       path:"/",
       element:<Layout/>,
       children:[
          {
           
           path:"/",
           element:<MainHome/>,
           children:[
            {
                path:"/",
                element:<HomeLeft/>,
                children:[
                    {
                        path:"",
                        element:<PostContent/>
                    },
                    {
                        path:"/home/follow",
                        element:<FollowContent/>
                    },
                    {
                        path:"/home/foryou",
                        element:<PostContent/>
                    },
                ]
               
            },
            
            
            
           ]
           
           },
          
           {
           path:"/home",
           element:<MainHome/>,
           children:[
            {
                path:"",
                element:<HomeLeft/>,
                children:[
                    {
                        path:"",
                        element:<PostContent/>
                    }
                ]
            }
           ]
            },
        
        {
            path:"/explore",
            element:<Explore/>
        },
        {
            path:"/list",
            element:<ListMain/>
        },
        {
            path:"/notification",
            element:<Notification/>
        },
        {
            path:"/profile",
            element:<Profile/>
        },
    ]
    },
   
]);

export default Route
