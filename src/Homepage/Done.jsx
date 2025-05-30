"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Done = () => {

    const [todayTask, setTodayTask] = useState([])

    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/done`)
        .then(res => res.json())
        .then(data => setTodayTask(data.todayTask))
    },[])


    const pendingTask = todayTask.filter(pend => pend.status === "Done")
    console.log(pendingTask)

    return (
        <div>
         <div className="overflow-x-auto mt-4 max-h-screen   ">
    <table className="table table-xs  ">
      <thead className="text-left">
        <tr>
          <th></th>
          <th>Task Name</th>
          <th>Description</th>
          <th>Date</th>            
          <th>Tag</th>
          <th className="text-center">Status</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className='text-black'>
         {pendingTask.map((substation, index) => (
          <tr key={substation._id}>
            <th>{index + 1}</th>
            <td>{substation.name}</td>
            <td>{substation.description}</td>
            <td>{substation.date}</td>
            <td >{substation.tag}</td>
            <td
              className={`text-${
                substation.status === "Pending" ? "red" : "green"
              }-400 bg-${substation.status === "Pending" ? "red" : ""}-200 rounded-2xl text-center font-bold`}
            >
              {substation.status}
            </td>
            <td className='text-gray-400 tooltip' data-tip="Edit"><Link href={substation.name}><FaRegEdit /></Link></td>
            <td className='text-red-400 tooltip' data-tip="Delete"><Link href={substation.name}><RiDeleteBin5Line /></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
        </div>
    );
};

export default Done;