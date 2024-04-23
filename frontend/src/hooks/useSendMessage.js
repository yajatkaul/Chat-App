import { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const {messages, setMessages, selectedConversation} = useConversation();

  const sendMessage = async (message) => {
    setLoading(true)
    try{
        const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({message}),
        })
        const data = await res.json()
        if(data.err){
            throw new Error(data.err)

        }
        setMessages([...messages,data]);
    }catch (err){
        toast.error(err.message)
    }finally{
        setLoading(false)
    }
  }

  return {sendMessage, loading}


}

export default useSendMessage