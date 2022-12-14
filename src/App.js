
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

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
