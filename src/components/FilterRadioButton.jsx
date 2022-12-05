import React, { Component } from 'react'

export class FilterRadioButton extends Component {
    state = {
        filterType :'',
    }
    handleRadioButtonChange = (e) => {
        this.setState({ filterType: e.target.value }, () => {
        this.props.getType(this.state.filterType)
        });
      };
  render() {
    return (
        <form action="#" className="filter-radio-btns ">
        <p >
          <label >
            <input
              name="group1"
              type="radio"
              value=""
              onChange={this.handleRadioButtonChange}
              checked={this.state.filterType === ""}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              onChange={this.handleRadioButtonChange}
              value="movie"
              checked={this.state.filterType === "movie"}
            />
            <span>Movies</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              onChange={this.handleRadioButtonChange}
              value="series"
              checked={this.state.filterType === "series"}
            />
            <span>Series</span>
          </label>
        </p>
      </form>
    )
  }
}

export default FilterRadioButton