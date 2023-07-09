import { TypePost } from "./types/Typepost"

function Post({title,body}:TypePost) {
    return (
        <div style={{ padding:"10px 5px" }}>
            <p><b>Title:{title}</b></p>
            <p> Description : {body}</p>
        </div>

    )
}

export default Post