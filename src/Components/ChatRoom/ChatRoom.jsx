import React from "react";
import './ChatRoom.css'

const ChatRoom = () => {

    const btns = ['stocks', 'bit coins']

    return(
        <div className="chatRoom">
            <h2>Chat Room</h2>
            {
                btns.length > 0 ? <div className="btnsHere">
                    {btns.map((item, i) => {
                        return(
                            <div key={i} className='btn'>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                </div> : null
            }
        </div>
    )
}

export default ChatRoom;