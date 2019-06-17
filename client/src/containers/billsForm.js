import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class BillsForm extends Component {
  render() {
    return (
      <form method="POST" action="/api/bills">
        <div>
          <Input id="billName" name="billName" type="text" title="Bill Name" />
        </div>
        <div>
          <Input id="billMessage" name="billMessage" type="text" title="Bill Message"/>
        </div>
        <div>
          <Button name="Submit"></Button>
        </div>
      </form>
    )
  }
}

export default BillsForm;
