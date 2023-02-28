import BookmarksPage from "../pages/BookmarksPage/BookmarksPage";

function BookmarksPageExample() {
    return (
        <BookmarksPage
            heading='Recipes to try'
            subheading="A bunch of recipes that maybe haven't been tried yet, or that I just haven't gotten around to transferring into this website"
            bookmarksLists={[
                {
                    heading: 'An example section',
                    bookmarks: [
                        {
                            name: 'An example bookmark',
                            url: 'https://recipe-blog-as.azurewebsites.net/'
                        },
                        {
                            name: 'Aaron Drinkwater Portfolio ',
                            url: 'http://aaron-drinkwater.co.uk/'
                        }
                    ]
                },
                {
                    heading: 'Another section',
                    bookmarks: [
                        {
                            name: 'An example bookmark',
                            url: 'https://recipe-blog-as.azurewebsites.net/'
                        }
                    ]
                }

            ]}
        />
    );
}

export default BookmarksPageExample;