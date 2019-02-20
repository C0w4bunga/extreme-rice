'use strict';

class GigsTable extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      gigs: []
    }
  }

  componentDidMount() {
    axios.get('https://gigs:3000/gigs')
      .then(response => {
        this.setState({ gigs: response.data })
      })
      .catch(error => {
        console.log('Error loading gigs. ', error)
      });
  }

  render() {
    return (
      <table className="table events-table">
        <tbody>
          { this.state.gigs.map((g, index) => (
            <tr key={index}>
              <td className="date">{g.date}</td>
              <td className="title">
                {g.name}
                {g.venue ? ` // ${g.venue}` : ''}
                {g.link ? ' // ' : ''}
                {g.link ? <a href={g.link}>Event</a> : ''}
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    )
  }
}

const domContainer = document.querySelector('#gigs-container');
ReactDOM.render(<GigsTable />, domContainer);
