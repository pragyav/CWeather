var React = require('react');
var {Link, IndexLink} = require('react-router');
var openWeatherMap = require('../api/openWeatherMap.jsx');

var Nav = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location='+ encodedLocation;
    }
  },
  render: function () {
    let temp = this.state.temp;
    temp = this.props.tempType === 'F' ? temp : Number(((temp - 32) * (5/9)).toFixed(2));
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">CWeather</li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Demo</Link>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-middle">
          {(this.state.currentLocation) ? `It is ${Math.round(temp)} degrees in ${this.state.currentLocation}` : ''}
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" className="custom-search-class" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
