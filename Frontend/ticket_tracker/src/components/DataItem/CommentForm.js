//The purpose of this file is to house the component for a submission form and button to add a new comment to the comment component

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { selectCurrentUser } from '../../features/usersPage/thisUserSlice';
import { addTicketComment, selectTicketById } from '../../features/ticketPage/allTicketsSlice';
import { setTicket } from '../../features/navBar/viewSlice';



export default function CommentForm({dataObject}){

    const [comment, setComment] = useState();
    const currentUser = useSelector(selectCurrentUser)[0];
    const dispatch = useDispatch();


    const getCurrentDateString = () =>{
        const date = new Date().getDate() //current date
        const month = new Date().getMonth() + 1 //current month
        const year = new Date().getFullYear() //current year
        const hours = new Date().getHours() //current hours
        const min = new Date().getMinutes() //current minutes
        const sec = new Date().getSeconds() //current seconds
    
        return month + '/' + date + '/' + year + '    ' +  hours + ':' + min + ':' + sec
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setComment(e.target.value);
    }

    const commentCreator = (e) =>{
       e.preventDefault();

        const newCommentObject = {};
        newCommentObject.dateCreated = getCurrentDateString();
        newCommentObject.createdBy = currentUser;
        newCommentObject.commentText = comment;

        dispatch(addTicketComment({data: newCommentObject, id: dataObject.id}));

        setComment("");

    }



    return(
        <form onSubmit={commentCreator}>
            <textarea cols="40" rows="3" id="new-comment" name="newComment" required maxLength="240" onChange={handleChange} value={comment}></textarea>
            <input type="submit" value="Send"/>
        </form>


    )
}