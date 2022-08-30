
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className={'app-wrapper__content'}>
                <Routes>
                    <Route path='/profile' element={<ProfileSection/>}/>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>

            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;