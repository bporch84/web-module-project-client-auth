// import { Link } from "react-router-dom";

const Friend = (props) => {

    const { friend } = props;

    return (
        <div key={friend.id}>
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        {/* <Link to={`/friends/edit/${friend.id}`}>
            <button>Edit {friend.name}</button>
        </Link> */}
        <button>Edit {friend.name}</button>
        <button>Delete {friend.name}</button>
    </div>
    )
};

export default Friend;
