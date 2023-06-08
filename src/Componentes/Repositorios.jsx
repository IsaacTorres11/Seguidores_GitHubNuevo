import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Repositorios = () => {

    const user = useParams()
    console.log(user.user)

    //Estado para guardar los repositorios del usuario
    const [repositories, setRepositories] = useState ([])
    const [loader, setLoader] = useState(false)

    // logica para actualizar los repositorios del usuario cada vez que el nombre de este cambie
    useEffect(()=>{
        const getRepositories = async()=>{
            try {
                const api =`https://api.github.com/users/${user.user}/repos`
                // console.log(api);
                const response = await fetch(api)
                const results = await response.json()
                setRepositories(results)
            } catch (error) {
                console.log(error)
            }
        }
        getRepositories()
        
    },[user])

    console.log(repositories)

  return (
    <div>
        <h2>Repositorios</h2>
    </div>
  )
}

export default Repositorios