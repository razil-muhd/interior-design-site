"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function TurnkeyPage() {
    const description = `Cyash Contracting is a commercial interior designing company in Saudi Arabia. We specialized in commercial interior designing in spaces such as corporate offices, cafeterias, restaurants, showrooms etc. If you are a businessman and looking to start your business in Saudi Arabia then you should think about office space. You can have both two options like choosing a dedicated shared office space or set up a new office.

Setting up a new office space is much more comfortable than sharing office space. It's why because it is very easy to accommodate all the staff according to the organization structure within a well-organized place.

While set up in office space you must include several factors like location of the office, purpose of the office, number of employees, tools used, behavior of the organization, capacity of the staff, work method. Basically discovered utilization of a space that leaves to achieve a common Goal of the organization.

So it is better to connect with the professional interior designing and executive company in Saudi Arabia. Cyash Contracting is well skilled and experienced in commercial interior designing specially in offices and showrooms etc.

Cyash Contracting is a turnkey construction solution for the customers who are looking to complete furnishing with limited time which includes all types of works like workstations, celling’s, electrical works, networking, partition, CCTV, air conditioning etc.

If you are looking for separate dealers and teams to do individual tasks you have a loss in both financial as well time that is effective business because we know that time is everything. When you make us as your interior partner we will serve with a full set up turnkey company solution as per your requirement.

Also there are different sectors looking to start their business in restaurant areas or building a new project like constructions etc. we can help with best electrical design for building construction and restaurant interior design with commercial office designing set up with fully equipped turnkey solutions.

An office workstation is one of the major components in an organization. On purpose and utility the design of workstation may vary. Normally single work stations are used for individual purposes and in another way versus for group activities like cubical work stations. Ceiling provides the best ambience in an office. Mostly the top of the office covered with ceiling basically made with gypsum board includes lighting. Area and availability of the space ceiling designs can be changed. Mostly they called in the name of a false ceiling. Different kinds of materials may be used in the ceiling but give some is the most used materials for doing ceilings.`;

    const subSections = [
        {
            title: "Electrical design for building construction",
            content: `Without electrical work we cannot make operations inside the office like writing without a book or paper.
Depending on the electrical installation; we can choose residential installation or commercial installation or vehicular insulation. Almost all of the lighting, air conditioning, CCTV, power plugs, computers are actually working under the best connected electric connections.

Networking is actually the term used for connecting the wall systems together to form a single connection for transferring the fall together. It's called basically LAN. But internet connections and networking is used in offices like it or software companies.`,
            image: "/img_construction.png"
        },
        {
            title: "Restaurant Interior Design",
            content: `It's very interesting to design a new restaurant interior design; that actually serves the best food. Different kinds of interior decoration can be done in a restaurant depending on the menu they serve. The main food and ambience is the one of the major attractions for every restaurant.
Some of the major key elements when designing a restaurant include space planning, lighting design, electrical layout, ventilation, and overall ambience. The seating arrangement should ensure comfort while allowing smooth movement for both customers and staff. Lighting plays a vital role in creating mood and highlighting the interior theme, while proper electrical planning supports kitchen equipment, air conditioning, CCTV, and sound systems. Ventilation and air conditioning are essential to maintain a pleasant dining environment. Finally, the interior theme, color palette, and furniture should align with the restaurant’s menu and brand identity, creating a memorable experience for customers.`,
            image: "/img_restaurant.png"
        },
        {
            title: "Think like a guest",
            content: `When designing a restaurant, you should imagine yourself as a customer experiencing the space for the first time. The design should offer a sense of elegance, comfort, and a classic feel that allows guests to relax and truly enjoy their dining time. From welcoming lighting and comfortable seating to pleasing colors and thoughtful layout, every detail should enhance the overall experience. A well-designed restaurant makes guests feel valued, encourages them to stay longer, and leaves a lasting impression that brings them back again.`,
            image: "/hero_couch.png"
        },
        {
            title: "Be true to your brand",
            content: `Your brand story represents who you are, and your restaurant design should clearly reflect that identity. Every design element from colors and materials to lighting and layout must align with your brand values and communicate what makes your food unique. The interior should visually express why you serve this cuisine and what sets your brand apart from others. When the design speaks the same language as your brand, it creates a strong connection with guests and reinforces a memorable dining experience that customers can instantly recognize and trust.`,
            image: "/hero_scene.png"
        },
        {
            title: "Don't skimp on storage",
            content: `In a restaurant, efficient storage is essential for smooth daily operations. Most areas should be thoughtfully designed to accommodate adequate storage for ingredients, utensils, equipment, and supplies. When planning space utilization, storage requirements must be kept in mind from the beginning so that every area is used effectively. Proper space allocation helps staff manage storage easily, reduces clutter, and ensures a clean, organized, and efficient working environment.`,
            image: "/iso_kitchen.png"
        },
        {
            title: "Little things matter",
            content: `Not bigger but littles are the best. You should consider small points in every accessible area of a customer that means the customer should be in your mind while designing an interior for a restaurant. The old area should be in an elegant classic design to make them proud and make them comfortable from their busy life when they were in your space.`,
            image: "/img_joinery_reception.png"
        },
        {
            title: "It's not just visual",
            content: `We don't think that it is about doing more paintings and visuals on the walls. But after leaving the space their memory is actually about our brand.
While designing the interior for the showroom the purpose should be initially considered. We need to provide more visual access that means space allocation for the customer axis and product showcase area to the showroom is a must consideration.
The layout should be prepared in a manner that can include more showcase space. Tiffin coins of showrooms are available that means showcasing something to their customers is actually the goal behind the showroom. We can consider all the factors while designing a showroom for better satisfaction for the objective.`,
            image: "/img_retail.png"
        },
        {
            title: "Visual & Access",
            content: `Partition is actually for vote to provide the separations from one space to another inside an office. Depending on the structure of the organization, separations may be partially fully closed etc. The materials used for separating the walls or feelings may be glass, wooden gypsum etc. Basically the separation is done to get privacy in office space or to get separate works.

Without CCTV no office can we work better CCTV is now an essential part of every organization. All the details and all the information about visitors outgoing what happening in the office recorded and stored in a space call cloud. We can use it for further checking or better management of the organization. Depending on the purpose and specifications of the camera and storage space the price may vary.

To give a good atmospheric condition is an important factor when designing an office. The air conditioning system is used to condition the space inside the office that actually satisfies the employees because the body must be in a comfortable condition. There are different kinds of AC sir available like split AC, inverter AC, centralized AC, etc. Depending on the space the specification of the AC can be changed.

Our specialization in commercial office design makes Cyash Contracting the most trustful interior designing company in Saudi Arabia. Our skilled engineers create versatile designs for your space which will full-fill your goal as per the customer requirement.`,
            image: "/iso_office.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Interior Turnkey Company In Saudi Arabia"
            description={description}
            image="/img_construction.png"
            subSections={subSections}
        />
    );
}
