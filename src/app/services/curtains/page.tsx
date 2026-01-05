"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function CurtainsPage() {
    const description = `Curtains are a common word that we often touch or see around us, but they play an important part in making our home or office lovely. If you are going to do curtains and blinds in your space, and searching for curtain suppliers in Saudi Arabia, you can relax now. Cyash Contracting here as your complete interior Turkey solution. We are the leading interior design company in Saudi Arabia. We can do magic with the interior of your space. Do you know about curtains in use? Don’t worry we can look at the curtain works we had done.`;

    const subSections = [
        {
            title: "Vertical blinds",
            content: `Vertical blind curtains are a very elegant and attractive curtain style that has been around for a long time among the curtains. Fabric curtains are equally at home in large rooms as they are in smaller ones. This is a technique that is still extensively utilized in offices and organizations. They are available in both low-cost and high-end versions. If you are looking for an office window curtain, this would be your perfect choice.`,
            image: "/img_curtains_vertical.png"
        },
        {
            title: "Fabric curtains",
            content: `The main material utilized in their creation is synthetic polyester fabric, which provides these curtains a superb feel. They give superb lighting in the space by transmitting light in a straight line. Fabric curtains are a common curtain style that can be used for a variety of reasons.
Since ancient times, I've utilized these in a variety of ways, and they're still available in a variety of modern fashions now. Being cost-effective, the ability to purchase from any category is a huge plus. Fabric curtains with a high level of luxury are also available on the market.
Many types of fabric curtains, such as rayon venal velvet, are made from polyester cotton. These are available in a variety of budgets to suit your needs and budget. This is an antique curtain type that is frequently used in both offices and houses and provides excellent sound absorption.
Typically, these are composed of a rich, velvet-like fabric. As a result, you'll have plenty of seclusion and protection from the sun. Depending on the demands of the individual, these are available in full-length and half-length. These have the advantage of being able to be customized and purchased to fit the needs of any institution.`,
            image: "/img_curtains_fabric.png"
        },
        {
            title: "Roller shutters",
            content: `This is a novel curtain technique. They are, nonetheless, commonly utilized in offices and institutions. Roller shutters are more expensive than many other types of curtains, but they do not compromise on quality. Today's market offers a wide range of pricing and quality. Roller shutters can also endure a significant quantity of insulation and wind from the outside.
More expensive types with motor mounting and automatic shutting and opening are available. There are many different sorts of materials on the market. Depending on the nature and color of the offices in the office, these are available at various prices. The same curtain pattern that we generally employ is sheer curtains.`,
            image: "/img_curtains_roller.png"
        },
        {
            title: "Sheer curtains",
            content: `This is a fabric-based method of separating windows and doors in a room. Sheer curtains add a touch of luxury to any room. That is, it blocks light rays from the outside and transmits them in a low-intensity form in a dim manner.
The overall feel of the room is kept uncluttered but colorful as a result of this. These are frequently made of a variety of materials. Polyester, chiffon, silk, and cotton are among them. Even though it is a very old style, the relevance of the sheer curtain has not diminished to this day.`,
            image: "/img_curtains_sheer.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Curtain Suppliers in Saudi Arabia"
            description={description}
            image="/service_curtains.png"
            subSections={subSections}
        />
    );
}
