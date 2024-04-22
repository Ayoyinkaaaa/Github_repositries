import { useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const Singlerepo = () => {
    const { repoName } = useParams();
    const [repo, setRepo] = useState({});
    useEffect(() => {
        const apiUrl = `https://api.github.com/repos/Ayoyinkaaaa/${repoName}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setRepo({
                    name: data.name,
                    description: data.description,
                    url: data.html_url,
                    language: data.language,
                    stars: data.stargazers_count,
                    forks: data.forks,
                    openIssues: data.open_issues,
                    watchers: data.watchers,
                    branches: data.branches_url
                });
            });
    }, [repoName]);



    return (
        <section>
                <div className="repo_details">
                    <div className="details__name">
                        <h1>{repo.name}</h1>
                    </div>
                    <div className="details__info">
                        <div className="details__info__item">
                            <p>Stars</p>
                            <p>{repo.stars}</p>
                        </div>
                        <div className="details__info__item">
                            <p>Watchers</p>
                            <p>{repo.watchers}</p>
                        </div>
                        <div className="details__info__item">
                            <p>Forks</p>
                            <p>{repo.forks}</p>
                        </div>
                        <div className="details__info__item">
                            <p>Open Issues</p>
                            <p>{repo.openIssues}</p>
                        </div>
                    </div>
                    
                    <div className="repo_url">
                        <a href={repo.url} target="_blank" rel="noreferrer">
                            View on GitHub
                        </a>
                    </div>
                </div>

                <div className="button-control">
                    <Link to="/Repo">
                        <button className="singlerepo-button">Back to Repositories</button>
                    </Link>
                </div>
        </section>
    )
}

export default Singlerepo
