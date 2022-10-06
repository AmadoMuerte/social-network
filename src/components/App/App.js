
import './App.css';

import {Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProfileSection from "../ProfileSection/ProfileSection";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Friends from "../Friends/Friends";
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';


function App(props) {

  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className={'app-wrapper__content'}>
            <Routes>
                <Route
                    path='/profile'
                    element={<ProfileSection />}
                /> 
                <Route
                    path='/dialogs/*'
                    element={<DialogsContainer />}
                />
                <Route
                    path='/friends'
                   // element={<Friends />}  //friends={state.friends}
                />
                <Route
                    path='/news'
                    element={<News/>}
                />
                <Route
                    path='/music'
                    element={<Music/>}
                />
                <Route
                    path='/users'
                    element={<UsersContainer/>}
                />
                <Route
                    path='/settings'
                    element={<Settings/>}
                />
            </Routes>
        </div>
    </div>
  );
}

export default App;
