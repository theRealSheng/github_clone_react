import React from 'react';
import RepoList from '../components/RepoList';
import SelectedRepo from '../components/SelectedRepo';

const RepoDisplay = ({
    displayCommits,
    selectedRepo,
    repos,
    onRepoSelect,
    onClickReturn,
    onSearchTerm,
    onDisplayAll,
    onDisplayLimited,
    selectedRepoName,
    error,
    onReloadRepo
  }) => {

  const onClickReloadRepo = () => {
    onReloadRepo()
  }

  if (error) {
    return (
      <div>
        There was an error loading, please 
        <button 
          onClick={() => onClickReloadRepo()}>
          try again
        </button>
      </div>
    );
  }

  if (displayCommits) {
    return (
      <div>
        <SelectedRepo
          selectedRepoName={selectedRepoName}
          selectedRepo={selectedRepo}
          displayCommits={displayCommits}
          onClickReturn={onClickReturn} 
          onSearchTerm={onSearchTerm} 
          onDisplayAll={onDisplayAll}
          onDisplayLimited={onDisplayLimited}
          />
      </div>
    );
  }

  return (
    <div>
      <RepoList 
        onRepoSelect={onRepoSelect}
        list={repos}/>
    </div>
  );
}

export default RepoDisplay;