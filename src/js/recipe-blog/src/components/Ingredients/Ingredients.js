import "./Ingredients.scss";
import Heading from "../Heading/Heading";

function Ingredients(props) {
    return (
        <section className="ingredients">
            <Heading text={props.heading} level={2} theme={Heading.Themes.Secondary} />
            {props.sections.map((section, i) =>
                <IngredientsSection {...section} key={i} />
            )}
        </section>
    );
}

function IngredientsSection(props) {
    return (
        <div className="ingredients__section">
            {props.heading &&
                <Heading text={props.heading} level={3} theme={Heading.Themes.Secondary} />
            }
            <ul className="ingredients-list">
                {props.ingredients.map((ingredient, i) =>
                    <li className="ingredients-list__item" key={i}>
                        <p className="ingredient">
                            {ingredient}
                        </p>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Ingredients;