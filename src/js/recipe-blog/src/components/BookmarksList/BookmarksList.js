import './BookmarksList.scss';

import Heading from "../Heading/Heading";

function BookmarksList(props) {
    return (
        <div className='bookmarks-list__section'>
            {props.heading &&
                <Heading text={props.heading} level={2} theme={Heading.Themes.Secondary} />
            }
            <ul className='bookmarks-list'>
                {props.bookmarks.map((bookmark, i) =>
                    <li className='bookmarks-list__item' key={i}>
                        <div className='bookmark-card'>
                            <strong>{bookmark.name}</strong> | <a href={bookmark.url} target='_blank'>{bookmark.url}</a>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default BookmarksList;