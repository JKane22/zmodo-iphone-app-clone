import './css/App.css';

// Icons
import { HiOutlinePlus } from "react-icons/hi";
import { BsBellSlash, BsBell } from "react-icons/bs";
import { BiPlayCircle, BiRewindCircle, BiHomeAlt } from "react-icons/bi"; 
import { MdOutlineEventNote, MdOutlineCloudDownload, MdOutlineStorefront, MdOutlinePersonOutline } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className="title">Zmodo Iphone App</h4>
        <div className="phone-border">
          <div className="phone-notch"></div>
          <div className="zmodo-header">
            <span style={{ color: 'black', left: 7, top: 22, position: 'absolute', fontWeight: 'bold', fontSize: '19px', fontWeight: 'bolder' }}>Welcome</span>
            <HiOutlinePlus style={{ color: 'black', position: 'absolute', right: 10, top: 22, width: '20px' }} />
          </div>
          <div>
            <img src="https://www.zmodo.com/skin/frontend/default/zmodo_v4/images/1380/store/banner/main/23/0207/1001H.jpg" alt="promo img" className="zmodo-promo-img" />
          </div>
          <div className="zmodo-content">
            <div>
              <span className="zmodo-notifications-text">Notification</span>
              <span className="zmodo-notifications-settings">Settings</span>

              {/* Toggle Buttons (TEXT ONLY) */}
              <span className="zmodo-notifications-on"><BsBell /><br /><span className="zmodo-notifications-on-text">ON</span></span>
              <span className="zmodo-notifications-off"><BsBellSlash /><br /><span className="zmodo-notifications-off-text">OFF</span></span>
            </div>
            <div className="zmodo-cameras">
              <span className="zmodo-devices">My Devices</span>
              <span className="zmodo-device-settings">Settings</span>
              <div className="zmodo-device-card">
                <img src="https://support.zmodo.com/assets/template/default/images/product/88.png" className="zmodo-device-img" alt="Camera Photo" />
                <span className="zmodo-device-text">Hallway<br /><span className="zmodo-device-alerts">No new alerts</span></span>
                <span className="zmodo-device-live"><BiPlayCircle /><span className="zmodo-device-live-text">Live</span></span>
                <span className="zmodo-device-playback"><BiRewindCircle /><span className="zmodo-device-playback-text">Playback</span></span>
              </div>
              <div className="zmodo-device-card2">
                <img src="https://support.zmodo.com/assets/template/default/images/product/88.png" className="zmodo-device-img" alt="Camera Photo" />
                <span className="zmodo-device-text">Front Yard<br /><span className="zmodo-device-alerts">No new alerts</span></span>
                <span className="zmodo-device-live"><BiPlayCircle /><span className="zmodo-device-live-text">Live</span></span>
                <span className="zmodo-device-playback"><BiRewindCircle /><span className="zmodo-device-playback-text">Playback</span></span>
              </div>
            </div>
          </div>
          <div className="zmodo-footer">
            <span className="zmodo-footer-home"><BiHomeAlt /><br /><span className="zmodo-footer-text-home">Home</span></span>
            <span className="zmodo-footer-events"><MdOutlineEventNote /><br /><span className="zmodo-footer-icon-text">Events</span></span>
            <span className="zmodo-footer-cloud"><MdOutlineCloudDownload /><br /><span className="zmodo-footer-icon-text">Cloud</span></span>
            <span className="zmodo-footer-store"><MdOutlineStorefront /><br /><span className="zmodo-footer-icon-text">Store</span></span>
            <span className="zmodo-footer-me"><MdOutlinePersonOutline /><br /><span className="zmodo-footer-icon-text" style={{ left: '25%' }}>Me</span></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
