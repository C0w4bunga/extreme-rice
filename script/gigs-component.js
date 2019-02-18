'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GigsTable = function (_React$Component) {
  _inherits(GigsTable, _React$Component);

  function GigsTable(props) {
    _classCallCheck(this, GigsTable);

    var _this = _possibleConstructorReturn(this, (GigsTable.__proto__ || Object.getPrototypeOf(GigsTable)).call(this, props));

    _this.state = {
      gigs: []
    };
    return _this;
  }

  _createClass(GigsTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      axios.get('http://localhost:3000/gigs').then(function (response) {
        _this2.setState({ gigs: response.data });
      }).catch(function (error) {
        console.log('Error loading gigs. ', error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.gigs);
      return React.createElement(
        'table',
        { className: 'table events-table' },
        this.state.gigs.map(function (g) {
          return React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { 'class': 'date' },
              g.date
            ),
            React.createElement(
              'td',
              { 'class': 'title' },
              g.name
            )
          );
        })
      );
    }
  }]);

  return GigsTable;
}(React.Component);

var domContainer = document.querySelector('#gigs-container');
ReactDOM.render(React.createElement(GigsTable, null), domContainer);