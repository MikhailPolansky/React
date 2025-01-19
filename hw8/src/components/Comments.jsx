import { useEffect, useState } from 'react'
import {getComments, getCommentById} from '../api/comments.api'


export function Comments () {

    const [comments, setComments] = useState([])
    const [isLoad, setLoad] = useState(false)

    const [selectedCommentId, setSelectedCommentId] = useState(null); 
    const [selectedCommentDetails, setSelectedCommentDetails] = useState(null); 

    useEffect(() => {
        if (!comments.length) {
            setLoad(true)
            getComments().then(data => setComments(data)).finally(() => setLoad(false))
        }
    },[comments])

    const handleCommentsClick = (id) => {
        if (id === selectedCommentId) {
            setSelectedCommentId(null);
            setSelectedCommentDetails(null);
        } else {
            setLoad(true);
            getCommentById(id).then(data => {
                setSelectedCommentId(id);
                setSelectedCommentDetails(data);
            }).finally(() => setLoad(false));
        }
    };

return (
    <div>
        <h2>Comments</h2>
        <div>
            {
                !!comments.length && comments.map(comment => (
                    <div key={comment.id}>
                        <div onClick={() => handleCommentsClick(comment.id)} className='cursor'>
                            <b>{comment.id}</b> - {comment.name}
                        </div>

                        {selectedCommentId === comment.id && selectedCommentDetails && (
                            <div>
                                <p>
                                    id: {selectedCommentDetails.id};
                                    <br/>
                                    name: {selectedCommentDetails.name};
                                    <br/>
                                    email: {selectedCommentDetails.email};
                                    <br/>
                                    body: {selectedCommentDetails.body}
                                </p>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    </div>
);
}



 