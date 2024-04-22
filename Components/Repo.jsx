import  {useState, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom/dist';
function Repo() {
    const [ data, setData]= useState([])
    const [currentPosition, setcurrentPosition]= useState(0)
    const [value, setValue] = useState('');
    const button = document.querySelector('.button');



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

  const handleSearch = () => {
    const username = 'Ayoyinkaaaa';
    const searchQuery = encodeURIComponent(value);
    fetch(`https://api.github.com/search/repositories?q=user:${username}+${searchQuery}&per_page=4`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        if(data.items.length){
            button.style.display = 'none';
        }
        setData(data.items);
        setValue('');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
}

const handleReset = (e) => {
    e.preventDefault();
    fetchData();
    button.style.display = 'flex'
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
            <div className='repo-info'key= {User.name}>
                <div className= 'repo-head'>
                <Link to={`/Singlerepo/${User.name}`}>
                    <h1 >{User.name}</h1>
                </Link>
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
            <div className="form">
                <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)} />
                        <button ><FaSearch /></button>
                </form>
                <button onClick={handleReset}>reset</button>
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