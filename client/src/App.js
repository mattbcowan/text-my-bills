import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BillsList from './containers/billsList';
import BillsForm from './containers/billsForm';
import './App.css';

class App extends Component {

  state = {bills: null}

  componentDidMount() {
    fetch('/api/bills')
      .then(res => res.json())
      .then(bills => this.setState({ bills }))
  }

  render() {
    const { bills } = this.state
    console.log(bills)
    return (
      <div className="App">
        <Router>
          <Route exact={true} path="/" component={Home} />
          {bills && (
            <Route path="/api/bills/:_id" render={({ match }) => (
                <Bill bill={bills.find(b => b._id === match.params._id)} />
              )} />
          )}
          <BillsList />
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <>
    <h1>Bills</h1>
    <BillsForm />
  </>
)

const Bill = ({ bill }) => {
  console.log(bill)
  return (
    <div>
      <div>{bill.name}</div>
      <div>{bill.message || "No Message"}</div>
      <form method="POST" action={'/api/bills/'+ bill._id +'?_method=DELETE'}>
        <button type="submit">Delete</button>
      </form>
      <a href="/">Home</a>
    </div>
  )
}

export default App;
