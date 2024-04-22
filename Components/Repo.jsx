import  {useState, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
function Repo() {
    const [ data, setData]= useState([])
    const [currentPosition, setcurrentPosition]= useState(0)
    const fetchData = () => {
    return fetch(`https://api.github.com/users/Ayoyinkaaaa/repos?per_page=4&page=${currentPosition}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data)
            if(data === 0) {
                setcurrentPosition(0);
            }
        });
  }
    
  

    useEffect(() => {
    fetchData()
    },[currentPosition]);
    
    function handleNext(e) {
        e.preventDefault()
        setcurrentPosition(prev=> prev+1)
    }
    function handlePrevious(e) {
        e.preventDefault()
        setcurrentPosition(prev=> prev-1)
    }
    const User = data.map((User)=>{
        return(
            <div className='repo-info'key= {User.id}>
                <div className= 'repo-head'>
                <h1 >{User.name}</h1>
                <p>{User.visibility}</p>
                </div>
                <p>{User.language}</p>
                <p>{User.created_at}</p>
            </div>
        )
    })
    return (
        <section className='Repo'>
          <div className='Heading'>
            <h1> Popular Repositories</h1>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button><FaSearch /></button>
            </div>
            <div className= 'wrapper'> {User}</div>
            <div className= "button">
                <button onClick={handlePrevious} className="btn">Previous</button>
                <button onClick={handleNext} className="btn"> next</button> 

            </div>

        </section>
    );
    

}
export default Repo;