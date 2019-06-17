import React, {Component} from 'react';

// Components
import Input from '../components/Input';

class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Input
          inputType={'text'}
          title={'Bill Name'}
          name={'billName'}
          value={this.state.bills.name}
          placeholder={'Bill Name'}
          handleChange={this.handleInput}
        />
      </form>
    )
  }
}

export default FormContainer

// <form method="POST" action="/api/bills">
//   <div>
//     <FormInputLabel labelFor="billName" label="Bill Name" />
//     <FormInput id="billName" name="billName" />
//   </div>
//   <div>
//     <FormInputLabel labelFor="billMessage" label="Bill Message" />
//     <FormInput id="billMessage" name="billMessage" />
//   </div>
//   <div>
//     <button>Submit</button>
//   </div>
// </form>
