import React, {useState} from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dp from '../images/dp.jpg'
import ChatCard from '../components/chats-card';


const LeftScreen = () => {


const [arrow, setArrow] = useState(false);


    return (
        <div className="left-screen-main">
            <div className="navbar">
                <div>
                    <img src={dp} />
                </div>
                <div className = "left-nav-icons" >
                    <abbr title="status"><DataUsageIcon  style={{ fontSize: 20, margin : 8, cursor : 'pointer' }} /></abbr>
                    <abbr title="chat"><ChatIcon style={{ fontSize: 20, margin : 8, cursor : 'pointer'}} /></abbr>
                    <abbr title="more"><MoreVertIcon style={{ fontSize: 20, margin : 8, cursor : 'pointer' }} /></abbr>
                </div>
            </div>
            <div className = "left-searchbar">
                <div>{arrow ? <ArrowBackIcon className = "arrow" onFocus = {() => {setArrow(false)}} style={{ fontSize: 25, color : "blue"}} /> : <SearchIcon className = "searchIcon" style={{ fontSize: 25}} />}
                <input type = "text" onFocus = {() => {setArrow(true)}} onBlur = {() => {setArrow(false)}} placeholder = "Search or start new chat" />
                </div>
            </div>
            <div className = "chats-container">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
        </div>
        </div>
    )
}




export default LeftScreen;