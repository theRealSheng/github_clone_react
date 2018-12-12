import './SelectedRepo.css';
import React from 'react';

class SelectedRepo extends React.Component {
  state = { term: '' };

  onInputchange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchTerm(this.state.term);
  }

  onDisplayAll = () => {
    this.props.onDisplayAll();
  }

  onDisplayLimited = () => {
    this.props.onDisplayLimited();
  }

  render() {
    const {
      onClickReturn,
      selectedRepo,
      displayCommits,
      selectedRepoName
    } = this.props;

    const displayShowingCommits = `${displayCommits.length} of ${selectedRepo.length}`;
  
    const comments = displayCommits.map((item, index) => {
      const { message } = item.commit;
      const { date } = item.commit.committer;
      // Feature - backticks: Allows to create and handle dynamic strings
      const dateDisplay = `${date.substring(8,10)}-${date.substring(5,7)}-${date.substring(0,4)}`;
  
      return (
        <div key={index} className="single-commit">
          <h2>Commit on {dateDisplay}</h2>
          <h3>Comment: {message}</h3>
        </div>
      );
    })

    return (
      <div>
        <div className="btn-wrapper">
          <button className="ui negative basic button"
            onClick={onClickReturn}>
            Return
          </button>
        </div>
        <div>
          <h1>{selectedRepoName.toUpperCase()}</h1>
          <h2>
            Displaying: {displayShowingCommits} commits 
            <i className="chart line icon green large" />
            {
              selectedRepo.length <= 20? '' :
              displayCommits.length !== selectedRepo.length?
              <button className="btn-special" onClick={this.onDisplayAll}>
                See all
              </button> :
              <button className="btn-special" onClick={this.onDisplayLimited}>
                See last 20
              </button>
            }
          </h2>
        </div>
        
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui icon input search-input">
            <input type = "text"
              placeholder = "Search text in commit"
              onChange={e => this.onInputchange(e)} />
            <i className="search icon" />
          </div>
        </form>
        {comments}
      </div>
    );
  }
}

export default SelectedRepo;