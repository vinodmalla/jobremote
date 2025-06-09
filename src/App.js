import './App.css';
import Description from './Components/Description';
import Header from './Components/Header';
import JobData from './Components/JobData';
import useJobData from './Hooks/useJobData';
import { createBrowserRouter,Outlet } from 'react-router-dom';


function App() {
    useJobData();
  return (
    <>
     <Header />
     <Outlet />
     
     
   
     {/*<Description /> */}
    </>
  );
}
export const  approuter=createBrowserRouter([{
  path:'',
  element:<App />,
  children: [
    {
      path: "/",
      element: <JobData />,
    },{
      path: "/description",
      element: <Description />,
    }]


}])

export default App;
