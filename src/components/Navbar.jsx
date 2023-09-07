import React from 'react'

class Navbar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
    window.scroll({behavior: 'smooth'})
    window.scrollTo(0, 1000)
  }

  render() {
    return (
      <header className="text-gray-400 bg-white border-b shadow fixed top-0 right-0 left-0 z-10">
        <div className="container mx-auto flex justify-between align-middle p-5 items-center">
            <div className="flex align-middle title-font font-medium items-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-300 fill-yellow-300 p-2 bg-red-500 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <span className="text-gray-600 hidden sm:block ml-3 text-xl font-realityhyper">
                {process.env.REACT_APP_NAME}
              </span>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="flex bg-gray-200 rounded-full">
                <input 
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                  type="text" name="" id="" placeholder="Search " className="bg-transparent outline-none w-full px-4 py-3" />
                <button type="submit" className="p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </form>
        </div>
      </header>
    )
  }
}

export default Navbar