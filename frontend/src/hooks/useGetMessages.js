import { useEffect , useState } from 'react'
import useConversation from '../zustand/useConversation'

const useGetMessages = () => {
  const [loading,setLoading] = useState(false)
  const {messages,setMessages,selectedConversation} = useConversation()

  useEffect(() => {
    const getMessages = async () => {
        setLoding(true)
        try{
            const res = await fetch(`/api/messages/${selectedConversation._id}`)
            const data = await res.json()
            if(data.err){
                throw new Error(data.err);
            }
            setMessages(data)
        }catch (err){
            toast.error(err.message)
        }finally{
            setLoading(false);
        }
    }

    if(selectedConversation?._id) getMessages()
  },[selectedConversation?._id,setMessages])

  return {messages, loading};
}

export default useGetMessages