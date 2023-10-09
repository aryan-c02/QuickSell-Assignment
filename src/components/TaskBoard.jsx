import React, { useEffect, useState } from 'react'
import { statusArray, priorityArray, userArray } from '../utils/arrays';
import Board from './Board';
import "../styles/TaskBoard.css"
import Avatar from './Avatar';
import { priorityMapping, userMapping } from '../utils/mapping';
import transFormString from '../utils/transformString';


const TaskBoard = (props) => {

    const { grouping, ordering, users, tickets } = props;
    const [array, setArray] = useState([]);

    const IntializeArray = () => {
        if (grouping == "status") {
            setArray(statusArray);
        }
        else if (grouping == "priority") {
            setArray(priorityArray);
        }
        else if (grouping == "user") {
            setArray(userArray);
        }
    }

    useEffect(() => {
        IntializeArray()
    }, [grouping]);


    const sortedArrays = {};

    if (grouping == "priority") {
        priorityArray.forEach((value) => {
            const subArray = tickets.filter((item) => priorityMapping[item.priority] == value);
            sortedArrays[value] = subArray;
        })
    }
    else if (grouping == "status") {
        statusArray.forEach((value) => {
            const subArray = tickets.filter((item) => item.status == value);
            sortedArrays[value] = subArray;
        })
    }
    else {
        userArray.forEach((value) => {
            const subArray = tickets.filter((item) => userMapping[item.userId] == value);
            sortedArrays[value] = subArray;
        })
    }






    return (

        <div className='task-board-container' >

            {

                grouping == "priority" && <div className='board-wrapper'>
                    {
                        array && array.map((item, key) => {
                            return (
                                <div >

                                    <Board heading={item}
                                        key={key}
                                        users={users}
                                        tickets={sortedArrays[item]}
                                        grouping={grouping}
                                        ordering={ordering} />

                                </div>
                            )
                        })
                    }
                </div>

            }


            {

                grouping == "status" && <div className='board-wrapper'>
                    {
                        array && array.map((item, key) => {
                            return (
                                <div >

                                    <Board heading={item}
                                        key={key}
                                        users={users}
                                        tickets={sortedArrays[item]}
                                        grouping={grouping}
                                        ordering={ordering} />

                                </div>
                            )
                        })
                    }
                </div>

            }


            {

                grouping == "user" && <div className='board-wrapper'>
                    {
                        array && array.map((item, key) => {
                            return (
                                <div >

                                    <Board heading={item}
                                        key={key}
                                        users={users}
                                        tickets={sortedArrays[item]}
                                        grouping={grouping}
                                        ordering={ordering} />

                                </div>
                            )
                        })
                    }
                </div>

            }




        </div>



    )
}

export default TaskBoard