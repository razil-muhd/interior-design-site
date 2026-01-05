"use client";
import ServicePageLayout from "@/components/services/ServicePageLayout";

export default function PartitionPage() {
    const description = `Are you thinking of putting up a partition in your office? And you are searching for partition contractors in Saudi Arabia? We are one of the best to create your partition designs in the office. If you look at on-time delivery turn-key solution partners then we will be your first choice in let's have a look at the type of partitions we are doing.`;

    const subSections = [
        {
            title: "Wooden partition",
            content: `Wooden partitions are one of the oldest types of partitioning that humanity has used. It's possible that it's the most genuine means of dividing the market. This can be placed on the floor or on the side walls. Wooden dividers used in luxury homes and hotels resemble an art form in many respects. Cyash Contracting is specialized in wooden partition designs contractors in Saudi Arabia; in the past, wood dividers played a significant role in government structures such as courts, Parliament, and other government offices. Two types of wooden partitions are available. The first is a fixed type partition, and the second is a moveable type partition. We can use practically any hard solid wood, as well as engineered woods like plywood and MDF, for the wooden divider.`,
            image: "/img_partition_wooden.png"
        },
        {
            title: "Glass partition",
            content: `Glass partitions are a frequent partitioning method in a variety of workplace settings. The purpose of the glass barriers is to divide the work areas of employees in various places while also allowing them to interact with one another. Glass barriers can be installed with the help of aluminum fabrication or wooden mounting. Alternatively, the glass can be installed directly between the floor, ceiling, and side wall. Glass partitions give the office a spacious appearance and a grand atmosphere. Frosted glasses are commonly used for glass partitioning, as are tempered/safety glasses. The thickness of the glass dividers appears to range from 3/8 inch to 1/2 inch.`,
            image: "/img_partition_glass.png"
        },
        {
            title: "Dry wall partition",
            content: `You can stop looking for dry wall partition contractors in Saudi Arabia. We are here to serve you and a little awareness about the dry wall partition is here. Drywall systems are a tried-and-true partitioning mechanism. This division strategy is used by the majority of businesses and offices. Track and studs are used to install and secure this. There are many different types of drywall dividers on the market today. Dry wall partitions are commonly made of galvanized iron and gypsum boards. In comparison to wooden partitions, gypsum dry wall is lighter in weight and more fire resistant. Because gypsum is a fire-retardant material In comparison to a huge brick wall, drywall is chosen for office purposes because of its sleek and slender form. From my extensive choice of options, you can select the quality and pattern that best suits your needs.`,
            image: "/innovative_office.png"
        },
        {
            title: "Movable partition",
            content: `We followed a novel paradigm of partition methods called movable partition. The purpose of the movable partition is extremely reasonable and straightforward. In a short period of time, we can arrange or convert the available space into smaller spaces in various shapes without incurring additional costs or exerting further effort. In the market, movable partitions are available in a wide range of styles and models. We can choose them wisely based on our company's behavior and work flow. The moveable dividers may have wheels for easy transportation, and from the market, you can customize the partition design and material to meet your needs. Can also be found with flat feet. For the creation of moveable partitions and other models, a wide range of materials can be used. From the market, you can customize the partition design and material to meet your needs.

If you are planning to partition in your company, we Cyash Contracting is the best solution for you. Our expert workers will make great solutions for you.`,
            image: "/img_office.png"
        }
    ];

    return (
        <ServicePageLayout
            title="Best Partition Company In Saudi Arabia"
            description={description}
            image="/service_partition.png"
            subSections={subSections}
        />
    );
}
