'use strict';

const e = React.createElement;

class GigsTable extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      gigs: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/gigs')
      .then(response => {
        // this.gigs = response.data;
        this.setState({ gigs: response.data })
      })
      .catch(error => {
        console.log('Error loading gigs. ', error)
      });
  }

  render() {
    const innerGigsTableHtml = 
      this.state.gigs
        .map(g => `<tr><td class="date">${g.date}</td><td class="title">${g.name}</td></tr>`)
        .join('');

    console.log(innerGigsTableHtml);

    return e(
      'table',
      { className: "table events-table" },
      innerGigsTableHtml
    );
  }
}

const domContainer = document.querySelector('#gigs-container');
ReactDOM.render(e(GigsTable), domContainer);
