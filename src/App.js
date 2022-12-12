
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Register />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
