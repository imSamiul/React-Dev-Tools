import { React } from "react";
function Detail(props) {
    return <div className = "info"><p>{props.number}</p>
    <p>{props.email}</p></div>
}
export default Detail;