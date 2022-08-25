
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className={'app-wrapper__content'}>
            {/*<ProfileSection />*/}
            <Dialogs />
        </div>
    </div>
  );
}

export default App;