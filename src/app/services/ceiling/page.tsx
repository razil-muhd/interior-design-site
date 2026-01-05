"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function CeilingPage() {
    const description = `Ceiling construction is one of the most important parts of a company interior. In modern culture gypsum is trendier. If you are searching for ceiling contractors? You don't have to be tense .You can stop looking now, we are here to serve you. Cyash Contracting will provide you the best ceiling designs to make your space glorious and appealing. We are the leading ceiling contractors in Saudi Arabia. You can choose the best from the better ones.

We will share some interesting facts about the ceiling .Maybe you do not get this from any other ceiling contractors. The ceiling of a company is one of its most significant components. Ceilings are chosen for each site based on the organization's internal workings and the nature of the work process. Sealing that is accurate and efficient has a significant impact on the mental state of office workers. The finest standards can only be achieved in the best working environment. As a result, any business must strive to make its office attractive and conducive to productivity. Furthermore, well-installed ceilings aid in attracting and impressing visitors to the offices.

Ceilings are typically found in one of two ways. The false ceiling is one thing, and the current ceiling ornamentation is another. Offices frequently have false ceilings. Suspended ceiling is another name for false ceiling. Under the main ceiling, it is normally situated 9 to 10 feet above the floor, but the height varies depending on the role of each office. There are numerous advantages to using ceilings. Offices can be kept quiet to some extent by absorbing more noise depending on each ceiling material. Ceilings can also help to improve energy efficiency. Because many types of false ceiling materials restrict heat loss, this is the case. As a result, air conditioning in rooms can be run more efficiently at reduced electricity costs. Similarly, a well-designed ceiling may make an office appear brighter, cleaner, and more disciplined. In addition, the temperature can be as low as 5°C in a building with a false ceiling and not in a building. This is because the air between the two ceilings cools the outside heat without entering it directly. It is available in a variety of forms, both inexpensive and costly. Gypsum, aluminum, wood, glass, and cenote are the five most common varieties of artificial ceilings on the market.

One of the most prevalent forms of ceiling is PVC. These are very light and easy to include into a design. Another related technology is POP. POP ceilings are more fire resistant than PVC ceilings, yet PVC ceilings are more cost effective than POP ceilings. Ceilings made of thermocol are very popular. This is a quick-to-shape, lightweight sealing technology. However, in terms of strength, it trails behind others. The gypsum ceiling is one of the most sought after modern designs. We can assure you that we can provide the best gypsum ceiling designs, as we have no doubt that we are the best false ceiling contractor near you. Therefore we guarantee world class false ceiling designs and excellent ceiling construction.`;

    const subSections = [
        {
            title: "Gypsum",
            content: `Gypsum is one of the most widely used sealing methods. It is considered a modern ceiling design method. This material is able to withstand fire.
This type of sealing material is made by incorporating thermal insulation. Gypsum also helps to keep the office quiet to some Extent by absorbing sounds. In addition, such ceilings are very helpful in distributing the same amount of light. We have the best Gypsum ceiling designs to make your space more glorious and appealing. Then why are you waiting for.?`,
            image: "/img_ceiling_gypsum.png"
        },
        {
            title: "Aluminum",
            content: `Aluminum is a commonly used ceiling method. These sealing materials are lightweight, more flexible and can be easily converted to any shape.
Aluminum ceilings also ensure the safety of the interior of the building by retaining moisture and termites. Aluminum and galvanized iron are mainly used for their manufacture.`,
            image: "/img_ceiling_aluminum.png"
        },
        {
            title: "Wooden",
            content: `The wooden ceiling is one of the most beautiful ceilings. Wooden ceilings can warm the eyes and relax you overall. They retain heat well outside and suppress loud noises as much as possible. Wooden ceilings make a building luxurious and require minimal maintenance. All the important wood used to make furniture can also be used for this. But the most commonly used are Teakwood and MDF. Wooden ceilings make a space amazing, if you are planning to do wooden ceiling, you can choose Cyash Contracting. We can make it extraordinary, we are the leading wooden ceiling contractors in Saudi Arabia.`,
            image: "/img_ceiling_wooden.png"
        },
        {
            title: "Celotex",
            content: `Celotex is an attractive sealing method that is gradually becoming less expensive and more effective. This sealing method, which can be easily done in a short period of time, effectively retains heat and eliminates heat loss to some extent, thereby better controlling the electricity bill.`,
            image: "/service_ceiling.png"
        },
        {
            title: "Glass",
            content: `Glass is a material that breaks easily and is transparent. Because of its transparency, the interior of a building with a glass ceiling will feel more beautiful and the interior more spacious. This is a luxurious ceiling style. Glass that does not transmit heat at all helps to keep the room cooler and prevents heat loss. With a proper lighting fixture on the glass ceiling, the ceiling can be adjusted to attract anyone who enters.`,
            image: "/interior_ceiling.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Ceiling Company In Saudi Arabia"
            description={description}
            image="/service_ceiling.png"
            subSections={subSections}
        />
    );
}
