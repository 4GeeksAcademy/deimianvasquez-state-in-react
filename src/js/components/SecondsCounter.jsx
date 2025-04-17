import React, { useEffect, useState } from "react"


export const SecondsCounter = () => {

    const [counter, setCounter] = useState(0)
    const [stopCounter, setStopCounter] = useState(false)



    useEffect(() => {
        if (!stopCounter) {
            const intervalId = setInterval(() => {
                console.log("deimian")
                setCounter(counter + 1)
            }, 1000)
            return () => clearInterval(intervalId)
        }

    }, [counter, stopCounter])


    return (
        <>
            <h1 className="mb-5">Hola {counter} </h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="d-flex">
                            <h1>{Math.floor((counter / 100) % 10)}</h1>
                            <h1>{Math.floor((counter / 10) % 10)}</h1>
                            <h1>{(counter / 1) % 10}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => setStopCounter(!stopCounter)
                }>{stopCounter ? "start" : "stop"}</button>
        </>
    )
}