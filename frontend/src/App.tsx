import React from 'react'
import {Route, Routes} from "react-router-dom";
import Index from './pages/Index';
// const Index = React.lazy(() => import('./pages/Index'));

const App: React.FC = () => {
  return (
      <>
        <Routes>
          <Route index element={() => <Index />} />
        </Routes>
      </>
  )
}

export default App
