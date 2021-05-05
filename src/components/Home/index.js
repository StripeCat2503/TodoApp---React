import React, {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { actions } from "../../redux/actions";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        // Get todo list
        dispatch(actions.getTodoList());
    }, []);

    return (
        <div>
            Home Page
        </div>
    )
}

export default Home
