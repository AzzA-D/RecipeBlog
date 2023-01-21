import Heading from '../Heading/Heading';
import './PageHeading.scss';

function PageHeading(props) {
    return (
        <section className="page-heading">
            <Heading
                text={props.text}
                level={1}
            />
        </section>
    );
}

export default PageHeading;