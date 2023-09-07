import React from 'react';

class Searchbar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    const { searchTerm } = this.state;

    // handling props
    // this.props.onFormSubmit(searchTerm);

    // shorcut for props
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="flex bg-black border px-5 py-3">
          <input 
            value={this.state.searchTerm}
            onChange={this.handleChange}
            type="text" name="" id="" placeholder="Search videos" className="bg-transparent outline-none w-full" />
          <button type="submit" className="pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </form>
    )
  }

}

export default Searchbar