import './Main.css';
import React from 'react';
import { connect } from 'react-redux';

import {
  fetchUser,
  fetchRepo,
  clearSelectedRepo
} from './../store/actions';
import Profile from './../components/Profile';
import RepoDisplay from './RepoDisplay';

class Main extends React.Component {
  state = {
    repos: [],
    selectedRepoName: null,
    selectedRepo: null,
    selectedRepoLimited: null,
    displayCommits: null,
    error: null
  }

  componentDidMount() {
    this.props.fetchUser()
      .then(() => {
        const  { repos, error } = this.props;
        this.setState({ repos, error });
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
      .then((repos) => {
        if(!repos) {
          this.setState({ error: this.props.error })
        } else {
          const { selectedRepo } = this.props;
          const limited = selectedRepo.slice(0, 20);
  
          this.setState({
            selectedRepoName: repoName,
            selectedRepo: selectedRepo,
            selectedRepoLimited: limited,
            displayCommits: limited
          });
  
          this.props.history.push(`/${repoName}`);
        }
      });
  }

  onClickReturn = () => {
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

  onReloadRepo = () => {
    this.props.fetchUser()
        .then(() => {
          const  { repos, error } = this.props;
          this.setState({ repos, error });
        });
  }
  
  render() {
  // Feature - Destructuring: Cleaner code & Less typing.
    const {
      repos,
      displayCommits,
      selectedRepo,
      selectedRepoName,
      error
    } = this.state;

    return (
      <div className="container">
        <Profile />
        <div className="display">
          <RepoDisplay
            onRepoSelect={this.onRepoSelect}
            onClickReturn={this.onClickReturn}
            onSearchTerm={this.onSearchTerm}
            onDisplayAll={this.onDisplayAll}
            onDisplayLimited={this.onDisplayLimited}
            onReloadRepo={this.onReloadRepo}
            error={error}
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
    selectedRepo: state.selectedRepo,
    error: state.error
  };
};

export default connect(mapStateToProps, {
  fetchUser, fetchRepo, clearSelectedRepo
})(Main);