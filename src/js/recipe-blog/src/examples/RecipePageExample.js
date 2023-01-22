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
                            {
                                ingredient: 'Butternut squash',
                                amount: '4',
                                measurement: 'cups'
                            },
                            {
                                ingredient: 'Red lentils',
                                amount: '2',
                                measurement: 'cups'
                            },
                            {
                                ingredient: 'Onion',
                                amount: '1',
                            },
                            {
                                ingredient: 'Garlic',
                                amount: '2',
                                measurement: 'cloves'
                            },
                            {
                                ingredient: 'Red chilli peppers',
                                amount: '2',
                            },
                            {
                                ingredient: 'Fresh ginger',
                                amount: '2',
                                measurement: 'tablespoons'
                            },
                            {
                                ingredient: 'Curry powder',
                                amount: '1',
                                measurement: 'tablespoon'
                            },
                            {
                                ingredient: 'Ground coriander',
                                amount: '2',
                                measurement: 'teaspoons'
                            },
                            {
                                ingredient: 'Garam masala',
                                amount: '2',
                                measurement: 'teaspoons'
                            },
                            {
                                ingredient: 'Turmeric',
                                amount: '2',
                                measurement: 'teaspoons'
                            },
                            {
                                ingredient: 'Ground cumin',
                                amount: '2',
                                measurement: 'teaspoons'
                            },
                            {
                                ingredient: 'Salt',
                                amount: '1',
                                measurement: 'teaspoon'
                            },
                            {
                                ingredient: 'Coconut milk',
                                amount: '1',
                                measurement: 'can'
                            },
                            {
                                ingredient: 'Diced tomatoes',
                                amount: '1',
                                measurement: 'can'
                            },
                            {
                                ingredient: 'Stock',
                                amount: '750',
                                measurement: 'ml'
                            }
                        ]
                    },
                    {
                        heading: 'After cooking',
                        ingredients: [
                            {
                                ingredient: 'lime juice',
                                amount: '1/2'
                            },
                            {
                                ingredient: 'salt'
                            }
                        ]
                    }
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
                    }
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