"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function JoineryPage() {
    const description = `Joinery is the key point of the beautification of an office or house interior. If you are searching for a top joinery fit out company in Saudi Arabia. You will be more confused because there are a lot of joinery firms in Saudi Arabia. But don't worry you are in the right place.

If you associate with us then you don't want to search carpentry companies or exhibition stand suppliers. We have the complete solution for your interior problems. Let’s look into some of our Major joinery compounds and their importance.`;

    const subSections = [
        {
            title: "Reception Counter",
            content: `Reception counters are the most important component in an officer's reception. The mode of reception counter will change depending on the behaviour and types of the organisation. For example, a hospital reception and a water reception counter are very different. This change will have an impact on the counter's design and material selection. We can make the reception counter out of various materials depending on our company's budget and needs. Glass,wood, aluminium, and MDF are some of the most common materials used in the manufacturing of reception counters, and they are readily available on the market depending on a variety of criteria. You can also personalise the designs that are available at the welcome desk.`,
            image: "/img_joinery_reception.png"
        },
        {
            title: "Display racks",
            content: `Display racks are the backbone of retail shops and supermarkets, and in today's culture, office receptions and hotel reception desks.
We are seriously considering display racks as an essential component in various applications. We can wisely accommodate display racks in our space, with the main goal of attracting and generating business. The display rack is frequently made of glass, wood, gypsum, and MDF. You can choose intelligently based on your budget and requirements.`,
            image: "/img_joinery_display.png"
        },
        {
            title: "Exhibition stands",
            content: `Exhibition stands are one of the primary attractions of the exhibition hall, and they are utilised in the lobbies of high-end hotels and restaurants to uncover and promote their products and services. Exhibition stands come in a variety of models in today's market. Some of the most common types of exhibition stands include pop-up displays, custom stands, and modular stands. Because of the distinctive and traditional design patterns and materials used on the modular kitchen, which is more completed and shiny, modular stands are more popular on the market presently. We can select any colour and design from the models that are appropriate for our demands and product.`,
            image: "/T4.jpg"
        },
        {
            title: " Korean countertops",
            content: `Corian countertops can be found in practically every restaurant, kitchen, and pantry in every structure. However, because modular kitchens, pantries, and food courts favour granite counters, it is now a little out of date. Granite counters can tolerate high temperatures and scratches on their surface because they are more polished and robust than corian counters. Seamless edges and smooth polished corners are the key advantages of Korean countertops. Furthermore, the corian material's colour will not fade as a result of scratches or use. It is widely accessible on the market in a variety of colours and sizes to suit your needs.`,
            image: "/T5.jpg"
        },
        {
            title: "Reception Desk",
            content: `Reception desks serve as the public face of your firm. If someone walks into your workplace for the first time, he will go straight to the reception area and wait for something. At that point , the ambiance of the reception will be used to evaluate or rate your organisation. The aesthetics of a reception space is mostly determined by the reception desk. Depending on the company's financial health and work flow, the size and quality of the welcome desk may vary. Different types of materials are utilised to build reception desks; currently, MDF, glass, and hardwood materials are the most regularly used. You can choose them based on your budget and company's work flow.`,
            image: "/J1.jpg"
        },
        {
            title: "Display Stands",
            content: `In any type of office, display stands are an integral feature of the reception area. Most offices regard the display stand as an open shell in which to expose their service/work materials, and an amusement desk in which to store items such as brochures, entertainment magazines, newspapers, and so on. Display stands are commonly accessible as a prefabricated product on the market, and you can choose the material from which the display stand is manufactured. It's available in a range of quality and pricing, depending on your requirements.

We are Saudi Arabia's premier joinery and fit-out company. Hotel reception counters, hospital reception counters, business reception counters, saloon counter designs, round reception counters, and other types of reception counters are available from us.`,
            image: "/J22.jpg"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Joinery Company In Saudi Arabia"
            description={description}
            image="/service_joinery.png"
            subSections={subSections}
        />
    );
}
