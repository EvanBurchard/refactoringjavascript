//The Woman Who Lived In A Shoe

    //There was an old woman who lived in a shoe.
    //She had so many children, she didn't know what to do;
    //She gave them some broth without any bread;
    //She whipp'd all their bums, and sent them to bed.

//So far, we've seen a hierarchy that is too deep, and one that makes no sense. In this section, we'll deal with one that is too broad. In other words, it has too many children. Before we explore the bad and complex version, let's look at the bad, but somewhat more common case:

class FormInput{
  constructor(name, email, question){
    this.errors = []
    name ? this.name = name : this._addError('name')
    email ? this.email = email : this._addError('email')
    question ? this.question = question : this._addError('question')
  }
  _addError(type){
    this.errors.push(type)
  }
  displayMessage(){
    if(this.errors[0] === undefined){
      return '<p>Thanks for submitting</p>'
    }else{
      var message = '<p>Uh oh. looks like we have errors</p>';
      if(this.errors.includes('name')){
         message = message + "<p>Name can't be blank</p>"
      }
      if(this.errors.includes('email')){
        message = message + "<p>email can't be blank</p>"
      }
      if(this.errors.includes('question')){
        message = message + "<p>Did you have a question?</p>"
      }
      return message;
    }
  }
}
const assert = require('assert');

const submission = new FormInput("me", 
                                 "me@evanburchard.com",
                                 "How would you refactor this?");
assert.equal(submission.displayMessage(),
'<p>Thanks for submitting</p>');

const blankSubmission = new FormInput();
assert.equal(blankSubmission.displayMessage(), 
"<p>Uh oh. looks like we have errors</p>
<p>Name can't be blank</p>
<p>email can't be blank</p>
<p>Did you have a question?</p>");
//Note those last 4 lines should have no spaces between the <p> tags,
//but it wouldn't all fit on one line

What's not great here is that our displayMessage function has markup mixed with logic.

class FormInput{
  constructor(name, email, question){
    this.errors = {name: "", email: "", question: ""}
    name ? this.name = name : this.errors.name = "<p>Name can't be blank</p>"
    email ? this.email = email : this.errors.email = "<p>Email can't be blank</p>"
    question ? this.question = question : this._addError('question')
  }
  _hasErrors(){
    return !this.errors.every (error) => {
      return error === ""
    };
    return (errors.name !== "" || erros.email
  }
  displayMessage(){
    if(this._hasErrors()){
      return new BaseMessage().message;
    }else{
      var message = new BaseError().message;
      if(this.errors.includes('name')){
         message = message + "<p>Name can't be blank</p>"
      }
      if(this.errors.includes('email')){
        message = message + "<p>email can't be blank</p>"
      }
      if(this.errors.includes('question')){
        message = message + "<p>Did you have a question?</p>"
      }
      return message;
    }
  }
}

const assert = require('assert');

const submission = new FormInput("me", "me@evanburchard.com", "How would you refactor this?");
assert.equal(submission.displayMessage(), '<p>Thanks for submitting</p>');

const blankSubmission = new FormInput();
assert.equal(blankSubmission.displayMessage(), "<p>Uh oh. looks like we have errors</p><p>Name can't be blank</p><p>email can't be blank</p><p>Did you have a question?</p>");
