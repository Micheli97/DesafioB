import React from "react";
import "./search.css";
import IconButton from "@material/react-icon-button";
import MaterialIcon from "@material/react-material-icon";

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
        <form>
          <input className="searchBox" placeholder="pesquisar..."></input>
          <IconButton>
            <MaterialIcon icon="Delete" />
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
