import HomePage from "../pages/HomePage/HomePage";

function HomePageExample() {
    return (
        <HomePage
            heading="Welcome to the Recipe Blog!"
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
                }
            ]}
        />
    );
}

export default HomePageExample;