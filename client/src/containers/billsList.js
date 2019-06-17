import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../components/Link';
import Container from '../components/Container';
import List from '../components/UnorderedList';
import ListItem from '../components/ListItem';

class BillsList extends Component {
  state = {bills: []}

  componentDidMount() {
    fetch('/api/bills')
      .then(res => res.json())
      .then(bills => this.setState({bills}))
  }

  render() {
    return (
      <Container>
        <List>
          {this.state.bills.map(bill =>
            <ListItem key={bill._id}>
              <Link
                href={'/api/bills/' + bill._id}
                children={bill.name}
              />
          </ListItem>
          )}
        </List>
      </Container>
    )
  }
}

export default BillsList;
