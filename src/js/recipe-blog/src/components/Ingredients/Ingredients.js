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
                        <Ingredient {...ingredient} />
                    </li>
                )}
            </ul>
        </div>
    );
}

function Ingredient(props) {
    return (
        <p className="ingredient">
            {props.amount} {props.measurement} {props.ingredient}
        </p>
    );
}

export default Ingredients;