import React, { useState, useEffect } from 'react';
import MemberCard from './Components/MemberCard.js';
import Forms from './Components/Forms.js';
import './App.css';

function App() {
const [members, setMembers] = useState([
  {name: 'Brandon', github: 'belzy', title:'Team Lead'},
  {name: 'Adam', github: 'abc@123.com', title:'Student'},
  {name: 'Forrest', github: 'abc@123.com', title:'Student'}]);

const addNewMember = newMem => {
  console.log("Members =", members);
  const newMember = {
    id: members.length,
    name: newMem.name,
    github: newMem.github, 
    title: newMem.title
  };
  console.log("newMem = ", newMem)
  console.log("newMember = ", newMember)
  setMembers([...members, newMember]);
};
console.log(members);
  return (
    <div className="App">
      <p>Add new Member</p>
      <MemberCard members={members}/>
      <Forms addNewMember={addNewMember} />
    </div>
  );
}

export default App;
