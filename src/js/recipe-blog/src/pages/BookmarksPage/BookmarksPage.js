import React, { useState } from 'react';
import './BookmarksPage.scss';

import PageHeading from "../../components/PageHeading/PageHeading";
import Grid from "../../components/Grid/Grid";
import BookmarksList from "../../components/BookmarksList/BookmarksList";
import CreateBookmarkForm from "../../components/CreateBookmarkForm/CreateBookmarkForm";
import Modal from '../../components/Modal/Modal';

function BookmarksPage(props) {
    const [displayForm, setDisplayForm] = useState(false);

    return (
        <div className='bookmarks-page'>
            <PageHeading text={props.heading} subheading={props.subheading} level={1} />
            <main>

                {props.bookmarkSections && props.bookmarkSections.length > 0 &&
                    <Grid>
                        {props.bookmarkSections.map((bookmarkSection, i) =>
                            <BookmarksList {...bookmarkSection} key={i} />
                        )}
                    </Grid>
                }

                {displayForm &&
                    <Modal>
                        <CreateBookmarkForm {...props.createBookmarkFormModel} />
                    </Modal>
                }

                <section className={'bookmark-form-toggler ' + (displayForm ? 'open' : '')}>
                    <button onClick={e => setDisplayForm(!displayForm)}>{displayForm ? 'Cancel' : 'Add a new bookmark'}</button>
                </section>

            </main>
        </div>
    );
}

export default BookmarksPage;