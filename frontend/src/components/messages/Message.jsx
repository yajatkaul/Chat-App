import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilepic: selectedConversation?.profilepic;
  const bubbleColor = fromMe ? 'bg-blue-500' : "";
  const formatedTime = extractTime(message.createdAt)




  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Chat Bubble' src={`${profilePic}` }/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColor}`}>{message.message}</div>
        <div className='chat-footer opacity-500 text-xs flex gap-1 items-center'>{formatedTime}</div>
    </div>
  )
}

export default Message