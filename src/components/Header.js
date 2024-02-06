
import PropTypes from "prop-types";
import Button from "./Button";

const onClick = () => {
    console.log('click')
}

const Header =  ({title, onAdd, showAdd }) => {
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color ={showAdd ? "red" : "green"} text= {showAdd ? "Close" : "Add"} onClick={onAdd}/>
        </header>
    );
}


Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;


// Below is example how style can be passed as constant parameter 
// const cssStyle = {

//     color: 'red',
//     backgroundColor: 'black'
// }