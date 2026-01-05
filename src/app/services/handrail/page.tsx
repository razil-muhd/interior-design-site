"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function HandrailPage() {
    const description = `Handrails are a frequent feature of today's structures, both in terms of safety and aesthetics. The handrail is an important consideration. There are many different types of handrails available on the market, and if you search for metal railing companies near me, you will find many of them, but we are different because before we begin our work, we educate you about the work we will be doing. Let's meet some of the most commonly used handrails.`;

    const subSections = [
        {
            title: "Glass rail",
            content: `Glass rail is one of the safest handrails on the market. The entire look of the area carrying the class rain will be grander and more elegant due to the glass material and its transparent feature. It can be done on a regular budget as well as a luxury budget. Railings are more commonly employed as a safety device to prevent individuals from falling from Stairwells or heights. Most of the time glass railing with wooden handrails is preferred by the majority of the customers.`,
            image: "/img_handrail_glass.png"
        },
        {
            title: "Glass handrails",
            content: `In comparison to other types of handrails, glass handrails are the most widely used and recommended. In some ways, glass handrails and glass railings are the same things. However, they serve a slightly different role. Railings are primarily used as a safety device to prevent objects or people from falling from great heights or from the sides of staircases. The handrails, on the other hand, are more of a supportive object to grip when we're stepping up the stairs or anything. Handrails can be seen all over the place. It's pretty lovely and appealing, and it provides us a sense of luxury in our offices or homes.`,
            image: "/img_handrail_glass_balcony.png"
        },
        {
            title: "Steel handrails",
            content: `Steel is the most popular material for handrails. Steel handrails are preferred by the general public since they are less expensive than glass rails. They are commonly utilized in both residential and commercial structures. Also in public places. Steel handrails allow us to experiment with more designs than other materials, and they may be turned into a variety of shapes. Stainless steel and carbon steel are commonly used for steel rails.`,
            image: "/img_handrail_steel.png"
        },
        {
            title: "Wooden handrails",
            content: `Wooden handrails are the most authentic and oldest type of handrail. However, wooden railings continue to be a luxury item with a large following. We can experiment with a variety of designs and artworks on them. Many premium hotels, restaurants, and homes still prefer wooden handrails because of their beauty. The most commonly used hardwoods for stairs are wood and maples.`,
            image: "/img_handrail_wooden.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Handrail Suppliers In Saudi Arabia"
            description={description}
            image="/service_handrail.png"
            subSections={subSections}
        />
    );
}
