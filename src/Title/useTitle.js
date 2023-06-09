import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Organic Store`;
    },[title])
}

export default useTitle;