import "./Button.scss";

function Button(props) {
    var className = "button";

    if (props.isPrimary) {
        className += " button--primary";
    } else {
        className += " button--secondary";
    }

    return (
        <a
            className={className}
            href={props.href}
        >
            <span>{props.text}</span>
        </a>
    );
}

export default Button;