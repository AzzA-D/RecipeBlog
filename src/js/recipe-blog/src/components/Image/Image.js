import './Image.scss';

function Image(props) {
    return (
        <picture className="image">
            <img
                src={props.src}
                alt={props.alt}
            />
        </picture>
    );
}

export default Image;