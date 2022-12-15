
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Register />} />
                <Route exact path='/home' element={<Home />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
