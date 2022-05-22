import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import SignIn from './screens/sign_in';
import SignUp from './screens/sign_up';
import GamePage from './screens/game_page';
import userProfile from './screens/user_profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/game_page/:id' element={<GamePage />} />
          <Route path='/profile' element={<userProfile />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
