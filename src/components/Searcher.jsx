import React, { Component } from "react";

export class Searcher extends Component {
  state = {
    search: "",
  };
  


  handleKey = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    this.props.getSearchValue(
      this.state.search,
    );
  };

  render() {
    return (
      <div className="searcher">
        <div className="row">
          <div className="col s12 search-container">
            <div className="input-field">
              <input
                id="email_inline"
                type="search"
                className="validate"
                placeholder="Search..."
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
            </div>
            <button
              className="waves-effect waves-light btn  green accent-4 search-btn"
              onClick={(e) =>
                this.props.getSearchValue(this.state.search)
              }
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Searcher;
