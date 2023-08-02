import axios from 'axios'

const baseUrl='https://testingmerntodobackend.onrender.com'

const getAllToDo=(setToDo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data-->',data);
        setToDo(data)
    })
    .catch((err)=>console.log(err))
}

const addToDo=(text,setText,setToDo,time)=>{
    axios
    .post(`${baseUrl}/save`,{text,time})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const updateToDo=(toDoId,text,setToDo,setText,setIsUpdating,time)=>{
    axios
    .post(`${baseUrl}/update`,{_id:toDoId,text,time})
    .then((data)=>{
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

const deleteToDo=(_id,setToDo)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}