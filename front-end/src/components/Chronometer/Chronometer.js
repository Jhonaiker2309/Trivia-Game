import React, {useState, useEffect} from 'react'
export default function Chronometer({changeTime}) {
    const[time,setTime] = useState(0)

useEffect(() => {
    
    changeTime(time)
    // eslint-disable-next-line
}, [time])

setTimeout(()=> {
  setTime(time + 1)
}, 100)
    
    return (
        <h2>
            {Math.floor(time / 600)}:{Math.floor(time / 10) % 60}:{time % 10}
        </h2>
    )
}
