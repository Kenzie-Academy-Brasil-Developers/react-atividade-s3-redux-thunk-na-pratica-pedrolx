import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

export const Button = () => {
    const [comment, setComment] = useState();

    const dispatch = useDispatch();

    return (
        <div className="button">
            <input onChange={(e)=> setComment(e.target.value)}></input>
            <button onClick={()=> dispatch(addCommentThunk(comment))}>New comment</button>
        </div>
    )
}