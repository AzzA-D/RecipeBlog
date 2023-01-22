import BodyText from "../BodyText/BodyText";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import "./RecipeCard.scss";

function RecipeCard(props) {
    return (
        <div className="recipe-card">
            <div className="recipe-card__media">
                {props.Image &&
                    <Image
                        src={props.image.url}
                        alt={props.image.altText}
                    />
                }
            </div>
            <div className="recipe-card__body">
                <Heading
                    text={props.heading}
                    level={3}
                />
                <BodyText
                    text={props.description}
                />
                <Button
                    text="View recipe"
                    href={props.url}
                    isPrimary={true}
                />
            </div>
        </div>
    );
}

export default RecipeCard;