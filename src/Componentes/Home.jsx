import { useState } from "react"
import Header from "./Header"
import GithubUser from "./GithubUser"
import Loader from "./Loader"
const Home = () => {

    //Estados
    const [userName, setUserName] = useState('')
    const [userInfo, setUserInfo] = useState(null)
    const [loader, setLoader] = useState(false)



    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(userName)
        setLoader(true)
        const Api = `https://api.github.com/users/${userName}`
        const response = await fetch(Api)
        const result = await response.json()
        setUserInfo(result)
        setLoader(false)
    }
  



    const handleChange = (e)=>{
        setUserName(e.target.value)
    }

  return (
    <div>
        <Header handleSubmit={handleSubmit} handleChange={handleChange}/>
        
        <div>
            {
                userInfo ?
                <GithubUser 
                    avatar={userInfo?.avatar_url}
                    github={userInfo?.html_url}
                    github_name={userInfo?.login}
                    name={userInfo?.name}
                    public_repos={userInfo?.public_repos}
                    followers={userInfo?.followers}
                    following={userInfo?.following}
                />
                :
                null
            }
        </div>
        { loader && <Loader/>}
    </div>
  )
}
export default Home