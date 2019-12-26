import React, { Component } from 'react';

const templateId = 'default'
export default class ContactUs extends Component {
  constructor(props){
    super(props)
    this.state = {
        form: {
            senderName: "",
            email_address: "",
            message: ""
        },
    }
  }

  localSubmit = () => {
    let{form} = this.state
    var template_params = {
      "from_email": form["email_address"],
      "from_name": form["senderName"],
      "to_name": "Ryan Young",
      "message_html": form["message"]
   }
    window.emailjs.send(
      'gmail', templateId,
      template_params
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    
    form["senderName"] = ""
    form["email_address"] = ""
    form["message"] = ""
    this.setState({form})
  }

  onChange = (e) => {
      const{form} = this.state
      const{name,value} = e.target
      form[name] = value
      this.setState({form})
  }
  render() {
    const{form} = this.state
    const{senderName, email_address, message} = form
    return (
      <section id="contact">
        <div className="formParent">
          <h1 className="devTitle contactTitleSpace aboutTitleSize" data-text = "Contact Me">Contact Me</h1>

          <div className="form-group">
            <label className="col-form-label label-color">Your Name</label>
            <input name="senderName" value = {senderName} type="text" className="form-control" placeholder="" id="inputDefault" onChange = {this.onChange} />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="label-color">Return Email</label>
            <input name="email_address" value = {email_address} onChange = {this.onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
          </div>

          <div className="form-group">
            <label className="col-form-label label-color">Message</label>
            <textarea name="message" rows="5" columns="10" value = {message} type="text" className="form-control" placeholder="" id="inputDefault" onChange = {this.onChange} />
          </div>
          <br />
          <button className="resumeButton resumeButtonSize" onClick={this.localSubmit} type="submit">Submit</button>
        </div>
      </section>
    );
  }
}