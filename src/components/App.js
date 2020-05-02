import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    pageHeader: "Naming Contests",
    contests: this.props.initialContests,
  };
  componentDidMount() {}
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview {...contest} key={contest.id} />
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
  contests: PropTypes.array,
  initialContests: PropTypes.array,
};

export default App;
