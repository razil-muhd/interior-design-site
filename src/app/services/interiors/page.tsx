"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function InteriorsPage() {
    const description = `We serve mainly offices, restaurants, clinics, cafeterias and hospitals, showrooms, and private residences. We provide a variety of interior and exterior services with diverse materials and design concepts.`;

    const subSections = [
        {
            title: "Shopping mall",
            content: `A shopping mall is a public space where a large number of people gather for a variety of reasons such as shopping, entertainment, business meetings, and so on. As a result, mall interior design plays an important part in making the mall more appealing and beautiful. For this reason, you must hire the shopping mall interior designers to make your mall more beautiful. No worries, Cyash Contracting is here to provide you with the best service possible. We are Saudi Arabia's leading mall interior designers.`,
            image: "/img_shopping_mall.png"
        },
        {
            title: "Restaurant",
            content: `Are you on the lookout for a restaurant interior designer?
Then you come to the right place. The ambiance of a restaurant interior is quite significant to a customer who will be dining with his closest friends and family. Therefore you have to make your restaurant more appealing from the interior design side. Cyash Contracting is the greatest option for meeting your needs. We are the leading restaurant interior fit out company in Saudi Arabia.`,
            image: "/img_restaurant.png"
        },
        {
            title: "Showroom",
            content: `Showrooms are more appealing in beauty not only because of their contents, but also because of the showroom interior design. The best interior design elevates the showroom to a higher level of luxury and elegance. It has a significant impact on customers who enter the showroom, creating a sense of attachment and beauty regarding the space. If you're looking for the top showroom interior fit out design companies in Saudi Arabia for your showroom? Cyash Contracting is the preferable option because we have 15 years of experience in the interior design sector. Please do not hesitate to contact us so that we can provide you with the finest possible service.`,
            image: "/img_showroom_car.png"
        },
        {
            title: "Hospital",
            content: `As an interior design firm, we are more cognizant of hospital interior design than we are of other types of work. Because nobody comes to the hospital for any other reason than to be a patient or a bystander of a patient. As a result, the materials used in medical centre interior designs must not be on the Red List, and air supply and lighting are critical. The hospital must provide a tranquil and positive environment for the patients, and the interior design plays an important role in this. The interior designs will differ depending on the type of hospital. The dental hospital interior differs significantly from that of a typical hospital. Don't worry, we've dealt with similar situations before. We are Saudi Arabia's most prominent interior design firm. We will provide you with the best service possible.`,
            image: "/img_healthcare.png"
        },
        {
            title: "Factory",
            content: `The interior of a factory is created with a distinct mind-set than other types of interior work since the factory interior design is primarily concerned with the factory's work flow. The factory's materials and style will be completely dependent on the factory's functionality and work flow. And you want to be extremely careful when choosing an interior film to design your factory, don't worry, we're here to help you with the greatest factory interior designs in Saudi Arabia.`,
            image: "/img_construction.png"
        },
        {
            title: "Shop",
            content: `The interior design of every shop is the backbone of their business because we all enter a new shop based on the interior set up and beauty of the shop. If we are going to buy some sweets, the bakery shop interior design really plays a major role in convincing us to buy the products from that shop. In the case of a cloth shop interior, the display of the clothes must be amazing, which can only be done by using proper interior design and lighting. If you want to open your own store, you must consider the interior design of your retail store. You should go with experience and the best interior designers available. Are you on the lookout for someone like that? You've come to the right place; Cyash Contracting is here to make your home more beautiful and elegant with our contemporary interior design. So, what exactly are you waiting for?`,
            image: "/img_retail.png"
        },
        {
            title: "Pharmacy",
            content: `Is pharmacy interior design really that important? Why not, there are a lot of consumer inquiries about medical shop interior design on the market.
The most significant element at a medical store is the arrangement of medicines. Because of the convenience of access. The delivery desk and medicine shelves must be constructed in such a way that they are extremely useful to pharmacy employees, and the medicines must be kept in a clean and sanitary environment made of non-red listed materials. As a result, the aforementioned reasons, pharmacy interior design is just as vital as any other. Cyash Contracting is the finest choice for your pharmacy interior because we have been the leading interior fit out business in Saudi Arabia for the past 15 years. So, why are you putting off hiring the greatest interior designer for your medical shop?`,
            image: "/img_pharmacy_modern.png"
        },
        {
            title: "Supermarket",
            content: `Supermarkets have always been one of our favourite places to shop since we know we'll be able to purchase all of the items we require in one go. In a supermarket, we must offer a wide range of products available to clients in many categories. The primary responsibility of a supermarket is to display products by category and to arrange them attractively. The product's appearance plays a significant influence in convincing customers to purchase it. The primary aspects are the attractive design of the shelves, racks, and lighting. In terms of lighting, a Supermarket's lighting must be spectacular in order for the goods and interior to appear more attractive and enticing. If you are going to do interior design in your supermarket and are unsure who to call, we can provide you with the best Supermarket interior design in Saudi Arabia. We are one of the top interior design companies in Saudi Arabia, so what are you waiting for?`,
            image: "/img_supermarket_interior.png"
        },
        {
            title: "Custom furniture",
            content: `Are you looking for a custom furniture manufacturer to meet your needs? Cyash Contracting can provide you with a complete furnishings solution. Furnitures are the main attraction of any type of structure; if the furnitures are of good quality and finished, the space appears to be beautiful even if it isn't. Add-ons In many cases, your space and concepts will be one-of-a-kind, thus the materials and furnishings will need to be completely customised. You require the assistance of an expert in that field at this moment. We're here to help you realise your goal of having custom furniture made for your home. We're ready to take your call. What are you waiting for?`,
            image: "/hero_couch.png"
        },
        {
            title: "Cafe interior",
            content: `It's probably a cafe if you're looking for a spot to meet. Yes, the interest in meeting a person at a cafeteria is both formal and intimate procedures in the same place while selecting the cafe for the meeting the quality of the service and the Ambience of the cafe are the major elements for the selection in that the key element in making a space more beautiful is the interior design place major Road and amazing Cafe interior design influence a person very much to spend some time there so many people For the reasons stated above, if you are looking for a fan interior firm to do your Cafe interior, Cyash Contracting is your best option. We have a clean 15 years of experience in that field and can make your cafe more beautiful and elegant not only in the front end but also in the back end. We can also do magic in your kitchen interior. Now the ball is in your court. What exactly are you waiting for?`,
            image: "/img_restaurant.png"
        },
        {
            title: "Exhibition Kiosk",
            content: `Kiosks are a unique type of business, and they are widely recognised in today's globe. We can see a little shop with an open front, which is usually a tea shop or a beverage shop, but it might also be a snack shop. In a kiosk, we can also put up a counter to sell tickets and newspapers. If you've decided to open your own kiosk and are looking for a kiosk manufacturer in Saudi Arabia? we're the company for you. Together, we can create a beautiful, budget-friendly kiosk model.`,
            image: "/img_exhibition_kiosk.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Commercial & Retail Interior Solutions"
            description={description}
            image="/img_retail.png"
            subSections={subSections}
        />
    );
}
