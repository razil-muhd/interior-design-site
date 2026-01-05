"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function CladdingPage() {
    const description = `Cladding is an exterior finishing surface, similar to a skin or an additional overload bearing layer that serves a dual purpose: it protects the building’s interiors from the elements while also making the exterior decorative and appealing. The appropriate cladding helps to keep buildings weather-tight and cost-effective while also providing thermal insulation and decreasing temperature variations within. It also aids in the enhancement of interior acoustics and day lighting. We are serving different types of cladding following;`;

    const subSections = [
        {
            title: "Aluminium cladding",
            content: `Aluminium cladding work is cladding that is applied to the exterior of a product with a thin layer of aluminium.
Purpose of aluminium cladding:
Aluminium composite panels are frequently used as cladding for buildings, which shield the shape from the consequences of weather. It may additionally serve a secondary cause as decoration.
Aluminium composite panels also are used to divert rainwater and wind away because of stopping those factors from coming into the shape. Because concrete is porous water effortlessly seeps in, inflicting the metallic beams interior to rust and expand. This now no longer handiest weakens the steel however can motivate the concrete to crack.

ACP is normally located as cladding for:
● Curtain walls.
● Internal and outside walls.
● Ceilings/roofs.
● Partitions.
● Outdoor furniture.
● Doors.

• How do you attach aluminum cladding?
It starts with making holes on the wall to fix the brackets. The MS profiles are fasted into the brackets. It's the vertex profile that will hold the panels .We can place insulation if required . aluminium cleats are used to attach the profiles to the MS profile. With the help of 90° cutting angle, grooves are made on the ACP and fold the panels to get a tray. Aluminium angles are riveted to the corners of the tray to hold it together. Aluminium aluminium cleans are fixed to the tray with rivets .Finally the envelope is fixed to the frame and Baker rods are inserted and grooves are filled with silicon weather seal.

• What is the thickness of aluminium cladding?
The commonly used thickness are 3mm,4mm and 6mm

• What is vitracore G2?
Victracore G2 is a high performance aluminum sheet ideal for all facade and soffit applications. It is constructed from 100% aluminum construction, making it one of the strongest non-combustible solutions`,
            image: "/img_cladding_exterior.png"
        },
        {
            title: "GLASS CLADDING",
            content: `Glass cladding is a widely used technique in which glazing is provided on the exterior surfaces of a building. A sheet of glass is provided to a building to improve its insulation and weather resistance properties.

• Types of glass cladding
Glass claddings are of two types namely tempered safety glass and vitrified glass.
(1) Tempered safety glass
The tempered safety glass can either be plain or coloured. It is very easy to clean and maintain and it also provides resistance to temperature variation, pressure and impact load.
(2) Vitrified glass
These glasses are more stable and are available in varieties of colours, shades and range. It is resistant to abrasion.

• Why use glass in cladding?
Using glass as cladding serves quite a few benefits The glass cladding improves the general splendor of the building. It additionally saves area withinside the building. In the homes meet purposeful necessities like retention lights and store power. It is likewise the high-quality in thermal insulation waterproofing and power conservation as it's far a terrible conductor of warmth it saves the power withinside the air-conditioning of the building.`,
            image: "/img_cladding_glass_skyscraper.png"
        },
        {
            title: "GYPSUM CLADDING",
            content: `Gypsum cladding is a cladding which may be used for conventional and cutting-edge interiors. It is able to be used rather than brick and stone .It's miles synthetic in a single coloration and may be regulated to some other shades consistent with our choice.

• Is gypsum board good for walls?
Gypsum board is an excellent alternative for partitions due to its benefits. Due to its inherent fire resistance, gypsum board, normally called drywall, is the highest quality constructing fabric for wall, ceiling, and partition structures in residential, institutional, and business structures.

• What is a gypsum panel used for?
Gypsum board is used as cladding material for interior walls and ceilings in residential and commercial buildings. It is also used as drywall and as a base for exterior partition panels in sheltered locations.`,
            image: "/img_ceiling_gypsum.png"
        },
        {
            title: "STONE CLADDING",
            content: `• What is the meaning of stone cladding?
Stone cladding is a layer of stone added to the interior or exterior surfaces of a building

• How do you apply stone cladding?
Cladding may be applied in methods one is wet method and other is dry approach. In the wet method, the stone cladding is hooked up to the wall with cement or other adhesives. In case of a dry approach the stone cladding is fixed to the wall with the aid of using drilling or bolting.

• Advantages and disadvantage of stone cladding
Advantages: enhances beauty and durability, high level of insulation, resistant to weather and fire , increases the value of home and easy to maintain
Disadvantage: labor intensive, time consuming to install, expensive, needs sealing for protection

• How long does stone cladding last?
It will last between 30 and 60years`,
            image: "/service_cladding.png"
        },
        {
            title: "WOODEN WALL CLADDING",
            content: `• How do you clad a wall with wood?
Wooden cladding is attached to the wall with the help of adhesives or nails. The adhesives are added at a gap of 10 inches and the panel is pressed to avoid air bubbles.

• What wood is used for wood paneling
Solid wood, plywood, salvaged wood (also called reclaimed wood), corkboard, or types of fiberboard such as press wood or MDF.

Do you wish to decorate your space by cladding? You don’t have to contact any of the other stone cladding contractors or aluminum cladding contractors who were good in aluminum cladding. We are the best cladding company in Saudi Arabia.`,
            image: "/img_partition_wooden.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Cladding Company In Saudi Arabia"
            description={description}
            image="/service_cladding.png"
            subSections={subSections}
        />
    );
}
