//Component to display comments.
//Might need sub-components for comment submission input form and button
//created by, comment text, date created

export default function ItemComments({ commentsArray }){

    const commentDisplayHelper = (arrayOfComments) =>{

        return arrayOfComments.map((comment) => {
            return <ul className="single-comment">
                <li>{comment.commentText}</li>
                <li>{comment.createdBy.name}</li>
                <li>{comment.dateCreated}</li>
            </ul>
        })
    }

    return(
        <div>
            <h1>item comments</h1>
            <ul className="comments-list">
                {commentDisplayHelper(commentsArray)}
            </ul>
        </div>
    )
};