import './Main.css';
import React from 'react';
import { connect } from 'react-redux';

import {
  fetchUser,
  fetchRepo,
  clearSelectedRepo
} from './../store/actions';
import Profile from './Profile';
import RepoDisplay from './RepoDisplay';

class Main extends React.Component {
  state = {
    repos: [],
    selectedRepoName: null,
    selectedRepo: null,
    selectedRepoLimited: null,
    displayCommits: null
  }

  componentDidMount() {
    this.props.fetchUser()
      .then(() => {
        this.setState({ repos: this.props.repos });
      });
  };

  // Feature - fat arrow/big arrod: Automatically binds the method
  onSearchTerm = (term) => {
    const keyTerm = term.toLowerCase();
    const newCommits = this.state.selectedRepo.map((item) => {
      const displayMessage = item.commit.message.toLowerCase();
      if (displayMessage.indexOf(keyTerm) !== -1) {
        return item;
      };
      return undefined;
    }).filter(item => item !== undefined);

    this.setState({ displayCommits: newCommits });
    return;
  }

  onRepoSelect = (repoName) => {
    this.props.fetchRepo(repoName)
      .then(() => {
        const { selectedRepo } = this.props;
        this.setState({
          selectedRepoName: repoName,
          selectedRepo: selectedRepo,
          selectedRepoLimited: selectedRepo.slice(0, 20),
          displayCommits: selectedRepo.slice(0, 20)
        });

        this.props.history.push(`/${repoName}`);
      });
  }

  onclearSelectedRepo = () => {
    this.props.clearSelectedRepo();
    this.setState({
      selectedRepo: null,
      selectedRepoLimited: null,
      displayCommits: null,
    });
    this.props.history.push(`/`);
  }

  onDisplayAll = () => {
    this.setState({ displayCommits: this.state.selectedRepo });
  }

  onDisplayLimited = () => {
    this.setState({ displayCommits: this.state.selectedRepoLimited });
  }
  
  render() {
  // Feature - Destructuring: Cleaner code & Less typing.
    const {
      repos,
      displayCommits,
      selectedRepo,
      selectedRepoName
    } = this.state;

    return (
      <div className="container">
        <Profile />
        <div className="display">
          <RepoDisplay
            onRepoSelect={this.onRepoSelect}
            onclearSelectedRepo={this.onclearSelectedRepo}
            onSearchTerm={this.onSearchTerm}
            onDisplayAll={this.onDisplayAll}
            onDisplayLimited={this.onDisplayLimited}
            repos={repos}
            selectedRepo={selectedRepo}
            selectedRepoName={selectedRepoName}
            displayCommits={displayCommits} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    repos: state.repos,
    selectedRepo: state.selectedRepo
  };
};

export default connect(mapStateToProps, {
  fetchUser, fetchRepo, clearSelectedRepo
})(Main);