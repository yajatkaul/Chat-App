import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading,setLoading] = useState(false);
  const [conversations,setConversations] = useState([]);

    useEffect(() => {

        const getConversations = async () =>{
            setLoading(true);
            try{
                const res = await fetch('/api/users');
                const data = await res.json();
                if(data.err){
                    throw new Error(data.err);
                }
                setConversations(data);
            }catch (err){
                toast.error(err.message);
            }finally{
                setLoading(false);
            }
    }

        getConversations();
    },[]);

    return {loading, conversations};
}

export default useGetConversations