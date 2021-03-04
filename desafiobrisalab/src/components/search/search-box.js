import React from "react";
import "./search.css";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: undefined,
    };
  }

  search(event) {
    const search = event.target.search.value;
    this.preventDefault();
  }

  renderSearchBox() {
    return (
      <div>
        <form className="searchBox">
          <InputBase 
          
          className="input-base" placeholder="Pesquisar" />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    );
  }

  render() {
    return <div>{this.renderSearchBox()}</div>;
  }
}

export default SearchBox;
