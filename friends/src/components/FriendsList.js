import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <Link to="/friends/add"><button>Add Friend</button></Link>
            {friends.map(friend =>
            <Friend key={friend.id} friend={friend} />
            )}
        </div>
    )
};

export default FriendsList;
