import React from 'react'
import '../sass/components.css'
import img from '../images/dp.jpg'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';

const ChatCard = () => {
    return(
        <div className = "main-chat-card">
            <div className = "img-div">
                <img src = {img} />
            </div>
            <div className = "name-div" >
                <p className = "frnd-name" >Name</p>
                <p className = "frnd-msg" > <span><DoneIcon color="primary" style = {{fontSize : 'large', marginRight : '-3px'}} /><DoneIcon color="primary" style = {{fontSize : 'large', marginLeft : '-10px', marginRight: '-5px'}} /></span> message</p>
            </div>
            <div className = "date-div" >
                <p>21/11/2021</p>
            </div>
        </div>
    )
}



export default ChatCard;