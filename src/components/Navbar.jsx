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

    // shorcut for props
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
    window.scroll({behavior: 'smooth'})
    window.scrollTo(0, 1000)
  }

  render() {
    return (
      <header className="text-gray-400 bg-black border-b border-white border-opacity-10 fixed top-0 right-0 left-0 z-10">
        <div className="container mx-auto flex justify-between align-middle p-5 items-center">
            <a href="/" className="flex align-middle title-font font-medium items-center mr-3 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-black fill-black p-2 bg-yellow-500 rounded-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <span className="hidden sm:block ml-3 text-xl font-realityhyper">{process.env.REACT_APP_NAME}</span>
            </a>
            <form onSubmit={this.handleSubmit}>
              <div className="flex bg-black border px-5 py-2">
                <input 
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                  type="text" name="" id="" placeholder="Search " className="bg-transparent outline-none w-full" />
                <button type="submit" className="pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
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