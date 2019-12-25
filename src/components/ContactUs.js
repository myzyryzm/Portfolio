import React, { Component } from 'react';
import {
  Row,
  Col,
  FormGroup
 } from 'reactstrap'
 
export default class ContactUs extends Component {
  constructor(props){
    super(props)
    this.state = {
        form: {
            subject: "",
            email_address: "",
            message: ""
        },
    }
  }

  localSubmit = () => {
    let{form} = this.state
    form["subject"] = ""
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
    const{subject, email_address, message} = form
    return (
      <section id="contact">
        <div className="formParent">
          <h1 className="devTitle contactTitleSpace" data-text = "Contact Me">Contact Me</h1>

          <div className="form-group">
            <label className="col-form-label label-color" for="inputDefault">Subject</label>
            <input name="subject" value = {subject} type="text" className="form-control" placeholder="" id="inputDefault" onChange = {this.onChange} />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="label-color">Return Email</label>
            <input name="email_address" value = {email_address} onChange = {this.onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
          </div>

          <div className="form-group">
            <label className="col-form-label label-color" for="inputDefault">Message</label>
            <textarea name="message" rows="5" columns="10" value = {message} type="text" className="form-control" placeholder="" id="inputDefault" onChange = {this.onChange} />
          </div>
          <br />
          <button className="resumeButton resumeButtonSize" onClick={this.localSubmit} type="submit">Submit</button>
        </div>
      </section>
    );
  }
}