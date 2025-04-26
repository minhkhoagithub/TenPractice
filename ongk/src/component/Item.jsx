import { useEffect, useState } from "react"

export default function Item() {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch('https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id')
        .then(res => res.json())
        .then(data =>{
            setItem(data);           
        })
        .catch(err => console.log(err))
    },[])
    return(
        <>
            {
                item.map((item) =>(
                    <div key={item.id} className="w-1/4 bg-slate-200 m-2 p-2">
                        <h2 className="text-green-500">{item.name}</h2>
                        <p>{item.nav}</p>
                        <img src={item.avatar} alt="" />
                    </div>
                ))
            }
        </>
    )
}