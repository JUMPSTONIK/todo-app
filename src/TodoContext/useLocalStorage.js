import React from "react";

export function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect( ()=>{
        try {
            const localStoraItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if(!localStoraItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = []
            }else{
                parsedItem = JSON.parse(localStoraItem);
            }

            setItem(parsedItem);
            setLoading(false);
        }catch(error){
            setError(error)
        }
    },[])

    const saveItem = (newItems) =>{
        try{
        const stringifiedItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifiedItems);
        setItem(newItems);
        }catch(error){
            setError(error)
        }
    };
    
    return {
        item,
        saveItem,
        loading,
        error,
    }
}