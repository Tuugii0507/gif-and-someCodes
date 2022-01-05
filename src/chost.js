import React, {useEffect} from "react";

const Chost = ({show}) => {
    useEffect(() => {
        console.log("show")
        return () => {
            console.log("no")
        }
    }, [show])
    return <div>
        <h1>haha</h1>
    </div>
}

export default Chost;