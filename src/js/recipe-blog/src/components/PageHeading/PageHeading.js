import Heading from '../Heading/Heading';
import './PageHeading.scss';

function PageHeading(props) {
    return (
        <section className="page-heading">
            <Heading
                text={props.text}
                level={1}
            />
            {props.subheading &&
                <div className="page-heading__subheading">
                    <p>{props.subheading}</p>
                </div>
            }
        </section>
    );
}

export default PageHeading;