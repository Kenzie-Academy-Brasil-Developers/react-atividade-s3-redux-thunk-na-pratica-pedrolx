import { useSelector } from "react-redux";

export const Results = () => {

    const result = useSelector(({ user }) => user );

    return(
        <div className="results">
            {result.comments.map(comment => <p>{comment}</p>)}
        </div>
    )
}