import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Layout from './components/Layout';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    {/* <Sidebar> */}
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
            {/* </Sidebar> */}
          </BrowserRouter>
  );
}

export default App;
