import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Home/home.jsx';
// import Dedication from './Dedication/dedication.jsx';
// import Addrecipe from './AddRecipe/addrecipe.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Home/>}>
      {/* <Route path="dedication" element={<Dedication />} />
      <Route path="addrecipe" element={<addrecipe />} /> */}
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;