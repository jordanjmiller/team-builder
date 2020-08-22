import React, { useState } from 'react';

function Forms(props){

    const [formMember, setFormMember] = useState({name:'', github:'', title:''});
    const [github, setGithub] = useState('');
    const [title, setTitle] = useState('');


    const submitForm = e => {
        e.preventDefault();
        console.log('Member being added: ', formMember);
        props.addNewMember(formMember);
        setFormMember({ name:"", github:"", title:""});
      };
    const handleChanges = e => {
    setFormMember({ ...formMember, [e.target.name]: e.target.value });
    console.log(formMember);
    };


    return(
        <div className="App">
          {/* {console.log(user)} */}
          <form >
            <label>
                Name
            <br/>
              <input
                type="text"
                name="name"
                placeholder = " Name"
                value={formMember.name}
                onChange={event => handleChanges(event)}
              />
            </label>
            <br/>
            <label>
                Github
            <br/>
              <input
                type="text"
                name="github"
                placeholder=" Github"
                value={formMember.github}
                onChange={event => handleChanges(event)}
              />
            </label>
            <br/>
            <label>
                Title
            <br/>
              <input
                type="text"
                name="title"
                placeholder=" Title"
                value={formMember.title}
                onChange={event => handleChanges(event)}
              />
            </label>
            <br/>
            <button onClick={submitForm} >Submit!</button>
          </form>
        </div>
      );
}

export default Forms;

