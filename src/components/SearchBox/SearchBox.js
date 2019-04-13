import React from "react";
import PropTypes from "prop-types";
class SearchBox extends React.Component {
  static propTypes = {
    onChangeValue: PropTypes.func,
    query: PropTypes.string,
  };

  static defaultProps = {
    onChangeValue: () => {},
    query: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    if (e.target.value) {
      this.props.onChangeValue(e.target.value);
    }

    this.setState({
      query: e.target.value
    });
  }

  render() {
    const { query } = this.state;
    return (
      <div className="search-box">
        <input
          value={query}
          onChange={this.handleChange}
          className="search-box-input"
        />
      </div>
    );
  }
}

export default SearchBox;
