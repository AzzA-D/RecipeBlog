
import PageHeading from "../../components/PageHeading/PageHeading";
import Grid from "../../components/Grid/Grid";
import BookmarksList from "../../components/BookmarksList/BookmarksList";

function BookmarksPage(props) {
    return (
        <div>
            <PageHeading text={props.heading} subheading={props.subheading} level={1} />
            <main>
                {props.bookmarkSections && props.bookmarkSections.length > 0 &&
                    <Grid>
                        {props.bookmarkSections.map((bookmarkSection, i) =>
                            <BookmarksList {...bookmarkSection} key={i} />
                        )}
                    </Grid>
                }
            </main>
        </div>
    );
}

export default BookmarksPage;