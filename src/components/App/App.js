
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProfileSection from "../ProfileSection/ProfileSection";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Friends from "../Friends/Friends";

function App({state}) {

    let {profilePage, dialogPage, friends} = state

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className={'app-wrapper__content'}>
                <Routes>
                    <Route
                        path='/profile'
                        element={<ProfileSection postsData={profilePage.postsData}/>}
                    />
                    <Route
                        path='/dialogs/*'
                        element={
                            <Dialogs messagesData={dialogPage.messagesData}
                                     dialogsData={dialogPage.dialogsData}
                            />
                        }
                    />
                    <Route
                        path='/friends'
                        element={<Friends friends={friends}/>}
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
                        path='/settings'
                        element={<Settings/>}
                    />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;