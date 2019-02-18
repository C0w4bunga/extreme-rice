'use strict';

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
        this.setState({ gigs: response.data })
      })
      .catch(error => {
        console.log('Error loading gigs. ', error)
      });
  }

  render() {
    console.log(this.state.gigs)
    return (
      <table className="table events-table">
        { this.state.gigs.map(g => (
          <tr><td class="date">{g.date}</td><td class="title">{g.name}</td></tr>
        )) }
      </table>
    )
  }
}

const domContainer = document.querySelector('#gigs-container');
ReactDOM.render(<GigsTable />, domContainer);
