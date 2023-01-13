//Component to display comments.
//Might need sub-components for comment submission input form and button
//created by, comment text, date created

import {useSelector, useDispatch} from 'react-redux';
import { selectCurrentUser } from '../../features/usersPage/thisUserSlice';
import { selectCurrentProject, selectCurrentTicket, setTicket, setProject } from '../../features/navBar/viewSlice';
import { addProjectComment } from '../../features/projectPage/allProjectsSlice';
import { addTicketComment, selectTicketById } from '../../features/ticketPage/allTicketsSlice';



export default function ItemComments({ dataObject, dataType }){

    const currentUser = useSelector(selectCurrentUser)[0];

    const currentProject = useSelector(selectCurrentProject);
    const currentTicket = useSelector(selectTicketById(dataObject.id));
   
    const dispatch = useDispatch();

    const commentDisplayHelper = (arrayOfComments) =>{

        return arrayOfComments.map((comment) => {
            return <ul className="single-comment">
                <li>{comment.commentText}</li>
                <li>{comment.createdBy.name}</li>
                <li>{comment.dateCreated}</li>
            </ul>
        })
    }

    const getCurrentDateString = () =>{
        const date = new Date().getDate() //current date
        const month = new Date().getMonth() + 1 //current month
        const year = new Date().getFullYear() //current year
        const hours = new Date().getHours() //current hours
        const min = new Date().getMinutes() //current minutes
        const sec = new Date().getSeconds() //current seconds
    
        return month + '/' + date + '/' + year + '    ' +  hours + ':' + min + ':' + sec
    }

    const commentCreator = (e) =>{
        e.preventDefault();

        //Create our new comment object
        const newCommentObject = {};
        newCommentObject.dateCreated = getCurrentDateString();

        const formData = new FormData(e.target);
        newCommentObject.commentText = Object.fromEntries(formData.entries()).newComment;
        newCommentObject.createdBy = currentUser;

        //Send our new comment object to the appropriate state
        if(dataType === 'project'){
            dispatch(addProjectComment({data: newCommentObject, id: currentProject.id}))
            dispatch(setProject(currentProject));

        } else{
            dispatch(addTicketComment({data: newCommentObject, id: currentTicket.id}))
            dispatch(setTicket(currentTicket));
            //this is updating the state correctly, but i can't get it to display the new comment in view. It's like the state.view.currentTicket object is out of sync with the store
        }

        console.log(newCommentObject);

    }



    

    return(
        <div className="comments-box">
            <h1>item comments</h1>
            <ul className="comments-list">
                {commentDisplayHelper(dataObject.comments)}
            </ul>
            <form id="comment-creation" onSubmit={commentCreator}>
                <textarea cols="40" rows="3" id="new-comment" name="newComment" required maxLength="240"></textarea>
                <input type="submit" value="Send"/>

            </form>
        </div>
    )
};