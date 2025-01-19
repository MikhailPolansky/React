
import { useEffect, useState } from 'react'
import {getPosts, getPostById} from '../api/posts.api'


export function Posts () {

    const [posts, setPosts] = useState([])
    const [isLoad, setLoad] = useState(false)

    const [selectedPostId, setSelectedPostId] = useState(null); 
    const [selectedPostDetails, setSelectedPostDetails] = useState(null); 

    useEffect(() => {
        if (!posts.length) {
            setLoad(true)
            getPosts().then(data => setPosts(data)).finally(() => setLoad(false))
        }
    },[posts])

    const handlePostsClick = (id) => {
        if (id === selectedPostId) {
            setSelectedPostId(null);
            setSelectedPostDetails(null);
        } else {
            setLoad(true);
            getPostById(id).then(data => {
                setSelectedPostId(id);
                setSelectedPostDetails(data);
            }).finally(() => setLoad(false));
        }
    };

return (
    <div>
        <h2>Posts</h2>
        <div>
            {
                !!posts.length && posts.map(post => (
                    <div key={post.id}>
                        <div onClick={() => handlePostsClick(post.id)} className='cursor'>
                            <b>{post.id}</b> - {post.title}
                        </div>

                        {selectedPostId === post.id && selectedPostDetails && (
                            <div>
                                <p>
                                    id: {selectedPostDetails.id};
                                    <br />
                                    title: {selectedPostDetails.title};
                                    <br />
                                    body: {selectedPostDetails.body};
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



 