import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const SinglePost = (props) => {
    const { id } = props.match.params
    console.log("single post props: ", props, id)
    const [postname, setPostname] = useState('')

    useEffect(() => {
        let postName = ""
        switch (parseInt(id)) {
            case 1:
                postName = `Post ${id} details`
                break
            case 2:
                postName = `Post ${id} details`
                break
            case 3:
                postName = `Post ${id} details`
                break
            default:
                postName = `No Posts available`
        }
        setPostname(postName)
    }, [id])

    return (
        <div>
            {postname === "No Posts available" && <Redirect to="/about"/>}
            <h4>{postname}</h4>
        </div>
    )
}

export default SinglePost