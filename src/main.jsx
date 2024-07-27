import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product.jsx';
import NotFound from './pages/404.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

//  What is StricyMode ?
//  Implies a lot of rules and produce bugs to help you in development

// What is BrowserRouter ?
// BrowserRouter is a component that enables client-side routing for your React app.
// It uses the HTML5 history API to keep the UI in sync with the URL.
// It is the most commonly used router in React.  
// It is used to render the routes in the application.
// It is used to navigate between routes in the application.
// It is used to handle the client-side routing in the application.


{/* <Route path="*" element={<NotFound />} /> */}
// This is a catch-all route. It will be rendered when the URL does not match any other path  
// It is used to handle the 404 error in the application.
// It is used to render the not found page in the application.  */}*/>*/

