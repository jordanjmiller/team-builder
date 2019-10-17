import React, { useState } from 'react';
import '../App.css';



function MemberCard(props){
    return(
        <div className="memcards">
        {props.members.map((member, index) => {
            return (
                <div className="card" key={index}>
                <p>Name: {member.name}</p>
                <p>Github: {member.github}</p>
                <p>Title: {member.title}</p>
                </div>)
        })}
        </div>
      )
}

export default MemberCard;