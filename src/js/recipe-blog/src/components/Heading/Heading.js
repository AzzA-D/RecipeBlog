import './Heading.scss';

function Heading(props) {
    let className = "heading";

    switch (props.level) {
        case 1:
            return (
                <h1 className={className}>{props.text}</h1>
            );
        case 2:
            return (
                <h2 className={className}>{props.text}</h2>
            );
        case 3:
            return (
                <h3 className={className}>{props.text}</h3>
            );
        case 4:
        default:
            return (
                <h4 className={className}>{props.text}</h4>
            );
    }
}

export default Heading;