# Recipe Blog

An Umbraco 11 site for storing great recipes. 

## Setup

Setup should be relatively simple. Document types and some initial content are serialised using uSync so run an import after logging into Umbraco to quickly get a workable project.
The database connection string is in hidden in User Secrets.

To test the front-end of the site, run the following:
```
cd src/js/recipe-blog
yarn
yarn start
```

To build the front-end of the site for local development, the following will build:
```
cd src/js/recipe-blog
yarn build
```

## TODO

- Styling
- Dynamic update of asset URLs from manifest file
- Server-side rendering of React
- Exclude specific nodes from uSync
- Measurement conversion
- 'Do not sleep' mode for mobile to prevent the screen from turning off
- Randomly surface recipes on home page
- 'In season' date range for ingredients to flag recipes in season
- Related recipes - 'Things that go with {X}}'
- Block list editor for Recipe body
- ~~Azure blob storage~~ 
- 'Category' pages containing recipes built from list of tags tag
- Init header and footer as part of Umbraco site