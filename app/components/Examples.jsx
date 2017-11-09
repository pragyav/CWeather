var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>     
      <p>Here are a few locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Helsinki'>Helsinki, FI</Link>
        </li>
        <li>
          <Link to='/?location=New Delhi'>New Delhi, IN</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, GB</Link>
        </li>
         <li>
          <Link to='/?location=New York'>New York, US</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, JP</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
