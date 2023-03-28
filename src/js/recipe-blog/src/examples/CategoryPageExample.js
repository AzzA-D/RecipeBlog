import CategoryPage from "../pages/CategoryPage/CategoryPage";

function CategoryPageExample() {
    return (
        <CategoryPage
            heading="Dinners"
            description="Check out some of favourite dinner recipes"
            recipes={[
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
                },
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

export default CategoryPageExample;