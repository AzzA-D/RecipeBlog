import RecipePage from "../pages/RecipePage/RecipePage";

function RecipePageExample() {
    return (
        <RecipePage
            heading="Lentil & Butternut Dahl"
            subheading="This slow-cooker recipe lets you just drop the ingredients in and leave it for 6 hours!"

            ingredients={{
                heading: "Ingredients",
                sections: [
                    {
                        heading: undefined,
                        ingredients: [
                            '4 cups butternut squash',
                            '2 cups red lentils',
                            '1 onion',
                            '2 garlic cloves',
                            '2 red chili peppers',
                            '2 tbsp fresh ginger',
                            '1 tbsp curry powder',
                            '2 tsp ground coriander',
                            '2 tsp garam masala',
                            '2 tsp ground cumin',
                            '1 tsp salt',
                            '1 can coconut milk',
                            '1 can diced tomatoes',
                            '750ml stock'
                        ]
                    },
                    {
                        heading: 'After cooking',
                        ingredients: [
                            '1/2 lime juice',
                            'salt'
                        ]
                    },
                    {
                        heading: 'Some more example ingredients',
                        ingredients: [
                            '4 cups butternut squash',
                            '2 cups red lentils',
                            '1 onion',
                            '2 garlic cloves',
                            '2 red chili peppers',
                            '2 tbsp fresh ginger',
                            '1 tbsp curry powder',
                            '2 tsp ground coriander',
                            '2 tsp garam masala',
                            '2 tsp ground cumin',
                            '1 tsp salt',
                            '1 can coconut milk',
                            '1 can diced tomatoes',
                            '750ml stock'
                        ]
                    },
                ]
            }}

            method={{
                heading: "Method",
                sections: [
                    {
                        heading: "",
                        steps: [
                            {
                                description: "<p>Finely chop onion, garlic and chili peppers.</p><p>Cube butternut squash.</p><p>Grate ginger.</p>",
                            },
                            {
                                description: "<p>Pop all of the ingredients apart from lime in your slow cooker.</p>",
                            }
                            ,
                            {
                                description: "<p>Cook on low for 6-8 hours, or high for 4-6 hours.</p>",
                            }
                        ]
                    },
                    {
                        heading: "After cooking",
                        steps: [
                            {
                                description: "<p>Serve with a lime wedge, rice and naan bread.</p>",
                            }
                        ]
                    },
                    {
                        heading: "Some more example steps",
                        steps: [
                            {
                                description: "<p>Finely chop onion, garlic and chili peppers.</p><p>Cube butternut squash.</p><p>Grate ginger.</p>",
                            },
                            {
                                description: "<p>Pop all of the ingredients apart from lime in your slow cooker.</p>",
                            }
                            ,
                            {
                                description: "<p>Cook on low for 6-8 hours, or high for 4-6 hours.</p>",
                            },
                            {
                                description: "<p>Finely chop onion, garlic and chili peppers.</p><p>Cube butternut squash.</p><p>Grate ginger.</p>",
                            },
                            {
                                description: "<p>Pop all of the ingredients apart from lime in your slow cooker.</p>",
                            }
                            ,
                            {
                                description: "<p>Cook on low for 6-8 hours, or high for 4-6 hours.</p>",
                            },
                            {
                                description: "<p>Finely chop onion, garlic and chili peppers.</p><p>Cube butternut squash.</p><p>Grate ginger.</p>",
                            },
                            {
                                description: "<p>Pop all of the ingredients apart from lime in your slow cooker.</p>",
                            }
                            ,
                            {
                                description: "<p>Cook on low for 6-8 hours, or high for 4-6 hours.</p>",
                            }
                        ]
                    },
                ]
            }}

            moreRecipesHeading="Check out some more recipes"
            moreRecipes={[
                {
                    heading: "Pizza",
                    description: "Try this great pizza base and sauce recipe!",
                    image: {
                        url: "https://picsum.photos/400",
                        altText: "A placeholder image from Picsum"
                    },
                    url: "#"
                },
                {
                    heading: "Tofu Scramble",
                    description: "Something to go with your fry-up or just have it with toast!",
                    image: {
                        url: "https://picsum.photos/400",
                        altText: "A placeholder image from Picsum"
                    },
                    url: "#"
                },
                {
                    heading: "Fridge cake",
                    description: "Chocolate, digestives and raisins!",
                    image: {
                        url: "https://picsum.photos/400",
                        altText: "A placeholder image from Picsum"
                    },
                    url: "#"
                }
            ]}

        />
    );
}

export default RecipePageExample;