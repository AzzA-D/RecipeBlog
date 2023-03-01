import BookmarksPage from "../pages/BookmarksPage/BookmarksPage";

function BookmarksPageExample() {
    var props = { "heading": "Bookmarks", "bookmarkSections": [{ "heading": "Breads", "bookmarks": [{ "name": "Homemade Subway Bread Recipe", "url": "https://www.blessthismessplease.com/homemade-subway-bread-recipe" }] }], "formModel": { "submitUrl": "~/umbraco/api/bookmarks/create", "bookmarksPageId": "980fa51d-474e-4484-96fa-a0f58a949495", "sections": [{ "sectionId": "38b635d3-e884-41d6-b3d5-2875472c6d8b", "heading": "Breads" }] } };
    return (
        <BookmarksPage
            heading='Recipes to try'
            subheading="A bunch of recipes that maybe haven't been tried yet, or that I just haven't gotten around to transferring into this website"
            bookmarkSections={[
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