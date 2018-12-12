import './RepoList.css';
import React from 'react';

const RepoList = ({list, onRepoSelect}) => {
  const items = list.map((item, index) => {
    return (
      <div key={index} className="card">
        <div className="content">
          <div className="header header-card">{item.name}</div>
          <div className="description">
            <h2>{item.language}</h2>
            {item.description || 'No description'}
          </div>
        </div>
        <div className="btn-wraper">
          <div className="ui labeled button">
            <div className="ui blue button">
              <i className="fork icon"></i> Forks
            </div>
            <div className="ui basic left pointing green label">
              {item.forks}
            </div>
          </div>
        </div>
        <div className="ui bottom attached button"
         onClick={()=> onRepoSelect(item.name)}>
          <i className="chart line icon green large" />
            See Commits
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Repositories</h1>
      <div className="ui cards card-container"> {items} </div>
    </div>
  );
}

export default RepoList;