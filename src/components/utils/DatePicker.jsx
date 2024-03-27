import React, { useState } from 'react'
import DateTimePicker from "react-datetime-picker"
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
const DatePicker = ({result}) => {
    const [startTime,setStartTime]= useState(new Date())
    const [endTime,setEndTime]= useState(new Date())
      const current = new Date()
    console.log("current always" , current<startTime);
   
    const handlegive =()=>{
        result({startTime,endTime})
    }
  return ( 
    <div className='p-4 flex flex-col items-center gap-2'>
        <div>
        <label htmlFor="Time"> From </label>
        <DateTimePicker   onChange={setStartTime} value={startTime} />
       
        </div>
        <div>
        <label htmlFor="Time">To  </label>
        <DateTimePicker   onChange={setEndTime} value={endTime} />
        </div>
            <button onClick={handlegive} className='p-2 text-opacity-50 bg-teal-700 w-20 rounded-md'>Submit</button>
    </div>
  )
}

export default DatePicker
