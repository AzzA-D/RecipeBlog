import './Method.scss';
import Heading from '../Heading/Heading';

function Method(props) {
    return (
        <section className="method">
            <Heading text={props.heading} level={2} theme={Heading.Themes.Secondary} />

            {props.sections.map((section, i) =>
                <MethodSection {...section} key={i} />
            )}
        </section>
    );
}

function MethodSection(props) {
    return (
        <div className="method-section">
            {props.heading &&
                <Heading text={props.heading} level={3} theme={Heading.Themes.Secondary} />
            }
            <ol className="method-steps-list">
                {props.steps.map((step, i) =>
                    <li className="method-step" key={i}>
                        <Step {...step} />
                    </li>
                )}
            </ol>
        </div>
    );
}

function createValidMarkup(invalidMarkup) {
    return { __html: invalidMarkup };
}

function Step(props) {
    return (
        <div className="step"
            dangerouslySetInnerHTML={createValidMarkup(props.description)}
        />
    );
}

export default Method;