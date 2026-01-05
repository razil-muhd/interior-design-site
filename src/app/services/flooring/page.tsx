"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function FlooringPage() {
    const description = `Are you looking for an Interior company to do your flooring work don't worry Cyash Contracting will be your best choice, because we are at top at the list of best interior flooring companies in Saudi Arabia we provide the total flooring solution in Saudi Arabia first of all you have to be a little away of what is flooring and what type of floorings are relevant in the market.

One of the most significant aspects of a structure is the flooring. The first thing a person touches when entering a home or business is the floor. The importance of the floor in any structure cannot be overstated. It is said that if the foundation is strong, the entire structure will be strong. Any company's flooring is determined by its work style and interior design. Being a structure has a lot of weight these days. If it's poor, adding something else will have a major impact on the aesthetics. As a result, I must select the best flooring available and ensure that it is appropriate for the institution's needs. The floor, meanwhile, should be designed by the top interior designers in the industry.

Today, the floor can be purchased for a variety of rates on the market. Today's flooring comes in a variety of styles. Its selection should take into account each institution's working style.
Tile flooring, vinyl flooring, carpet flooring, parquet flooring, raised flooring, and rubber flooring are the most frequent and widely utilized technologies.`;

    const subSections = [
        {
            title: "Tile flooring",
            content: `Do you want to know about the tile flooring company in Saudi Arabia? Know more about flooring you are at the right place
One of the most common and popular types of flooring is flooring tiles. Marble, granite, vitrified tiles, porcelain tiles, and ceramic tiles are just a few of the various types of tiles available. These are normally chosen based on the institutions or house's character, construction process, and budget. Marble and granite gradually became the property of the wealthy, and they were heavier and thicker than the others. As a result, the used flooring will be colder than the remainder of the floor. Another type of tile that is often utilized is vitrified tiles. In addition, they have a higher level of finishing brilliance than the others. Their surface is durable and sturdy at the same time. This is one of the most popular types of tiles. Ceramic tiles are one of the most commonly utilized tile types for walls, while porcelain tiles are another option. This allows us to select from a wide range of categories and quality levels to meet the demands of the poor.`,
            image: "/service_flooring.png"
        },
        {
            title: "Carpet flooring",
            content: `Are you looking for a carpet flooring company in Saudi Arabia, Cyash Contracting is your choice we serve you the best solution and awareness about Services also ,you can know more about the carpet flooring from here
This is one of the most usual flooring options. Carpeting is suitable for both the home and the office. Carpet provides a unique feel, despite being less durable than many other types of flooring. There are a variety of carts on the market, ranging in price from low to high. It can be used on both wood and plywood surfaces, as well as on the floor. As a result, we can readily handle fragile objects in a safe manner. Objects landing on the floor are less likely to detonate quickly as a result of this cushioning effect. Carpeting also has a very different soft feel to it, which is really different. Heat-retaining carpets absorb the heat in the room and keep a warm at all times. As a result, carpet is becoming more popular in locations with good cooling. Carpets, on the other hand, are rarely used in situations where direct watering is required.`,
            image: "/img_flooring_carpet.png"
        },
        {
            title: "Vinyl flooring",
            content: `Are you searching the list for the best vinyl flooring companies in Saudi Arabia? You can relax now. We provide you the best solutions for your whole interior works? And a little awareness about vinyl flooring
Vinyl is a popular flooring option for both homes and businesses. These have the advantage of being substantially less expensive than other options. They are simpler to set up and require less time to complete. Vinyl flooring comes in a variety of styles and quality levels. We have complete control over quality, price, and design. There is also no need to do anything between the vinyl and the floor provided the floor is level. WPC and SPC models are some of the models that can be used in the bathroom, such as direct water taps. Vinyl flooring is very popular among the general people because of its low cost.
Now you are a little aware of things, and you can stop searching for vinyl flooring contractors near me and we will be your better choice.`,
            image: "/img_flooring_vinyl.png"
        },
        {
            title: "Raised flooring",
            content: `This is a unique kind of flooring. They’re employed in a very different way from the others. They are only utilized to fully authenticate a building's or institution's requirements. The majority of the raised access flooring contractors fixed the height of the floor 12 inches to 6 feet off the ground. Raised Flooring has a variety of stories attached to it. Electric wires that flow through a particular location are sometimes employed as mechanical or plumbing utility lines or lecture stands. In clothes businesses, they're also employed as a trial stand. Raised flooring is frequently used just on the necessary elements of the inside of a room or structure. They can be found in apparel stores, hotels, restaurants, and shopping malls. Flooring can be made of a range of materials, including concrete, steel, and wood.`,
            image: "/img_office.png"
        },
        {
            title: "Rubber flooring",
            content: `Rubber flooring is one of the most popular types of flooring. They are, however, mostly employed in gyms, play schools, playrooms, bathrooms, sports, and other indoor settings. This is a fantastic flooring option. The appearance of the rubber flooring will be doubled if it is installed on a very smooth surface. Because they are really lovely when viewed at the same level. Rubber flooring can be installed over concrete, however adhesive must be used between the floor and the concrete. Natural wood rubber or green synthetic materials are used to make rubber flooring. The rubber room, which is also a strong noise absorber, is completely silent. Rubber flooring, on the other hand, can withstand vater. As a result, they provide a better grip on wet surfaces than other types of flooring.
Now you know about the rubber flooring what are you waiting for we are here to serve you are the best rubber flooring company in Saudi Arabia`,
            image: "/img_construction.png"
        },
        {
            title: "Parquet flooring",
            content: `Flooring is a type of flooring that has been around for a long time. Their allure, though, is unashamedly retro. When it comes to painting an image of parquet flooring, most of us have a laid-back attitude. These are accomplished in two ways: One was created entirely of pure wood, while the other was constructed entirely of engineered wood. Both strategies have their own set of benefits. Engineering wood, which is the primary and most appealing wood parquet flooring, can endure the negative effects of moisture. There is a significant alteration in eyesight in both circumstances. Although they are useful in engineering, they are rarely used in bathrooms. Similarly, these cars are noisier than other types. As a result, they are rarely employed in offices. However, the price is gradually moving forward. Although this sort of flooring is widespread in households, it may also be found in many high-end hotels.
Now the choice is yours you can stop knowing that best parquet flooring company near you Cyash Contracting is your interior solution`,
            image: "/img_flooring_parquet.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Flooring Company In Saudi Arabia"
            description={description}
            image="/service_flooring.png"
            subSections={subSections}
        />
    );
}
