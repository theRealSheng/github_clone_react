import React from 'react';
import RepoList from '../components/RepoList';
import SelectedRepo from '../components/SelectedRepo';

const RepoDisplay = ({
    displayCommits,
    selectedRepo,
    repos,
    onRepoSelect,
    onclearSelectedRepo,
    onSearchTerm,
    onDisplayAll,
    onDisplayLimited,
    selectedRepoName
  }) => {
  if (displayCommits) {
    return (
      <div>
        <SelectedRepo
          selectedRepoName={selectedRepoName}
          selectedRepo={selectedRepo}
          displayCommits={displayCommits}
          onclearSelectedRepo={onclearSelectedRepo} 
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