import React, { Component } from "react";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors:[],
      loading: true,

    }
  }
componentDidMount()
{
  // this authors: is the one in the constructor
  //this.setState({authors: authors})
  //console.log(this.state.loading)

  axios.get('https://the-index-api.herokuapp.com/api/authors/')
  .then(res => res.data)
  .then(authors => {
    this.setState({
      authors: authors,
      loading: false
    })

//console.log(this.state.loading)
})

    .catch(err => console.log(err));

  }

  render() {
    let loads;
   if(this.state.loading){
      loads = <h1 align="center">
                Loading...
              </h1>
    }else{
      loads = <AuthorsList authors= {this.state.authors} />
    }
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {loads}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
