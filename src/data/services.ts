import {
    Home,
    Hammer,
    Layers,
    PaintRoller,
    Columns2,
    BrickWall,
    TrendingUp,
    Blinds,
    Store
} from "lucide-react";

export const servicesData = [
    {
        id: "turnkey",
        label: "Turnkey Projects",
        title: "Best Interior Turnkey Company In Saudi Arabia", // Updated title from text
        description: "Complete design & build solutions from concept to handover.",
        image: "/service_turnkey.png",
        icon: Home
    },
    {
        id: "joinery",
        label: "Joinery Works",
        title: "Best Joinery Company In Saudi Arabia",
        description: "Bespoke carpentry and custom wooden masterpieces.",
        image: "/service_joinery.png",
        icon: Hammer
    },
    {
        id: "flooring",
        label: "Flooring Solutions",
        title: "Best Flooring Company In Saudi Arabia",
        description: "Premium marble, parquet, and tile installations.",
        image: "/service_flooring.png",
        icon: Layers
    },
    {
        id: "ceiling",
        label: "Ceiling Works",
        title: "Best Ceiling Company In Saudi Arabia",
        description: "Artistic false ceilings and integrated lighting systems.",
        image: "/service_ceiling.png",
        icon: PaintRoller
    },
    {
        id: "partition",
        label: "Partitions",
        title: "Best Partition Company In Saudi Arabia",
        description: "Glass and gypsum dividers for modern workspaces.",
        image: "/service_partition.png",
        icon: Columns2
    },
    {
        id: "cladding",
        label: "Wall Cladding",
        title: "Best Cladding Company In Saudi Arabia",
        description: "Textured stone, wood, and panel feature walls.",
        image: "/service_cladding.png",
        icon: BrickWall
    },
    {
        id: "handrail",
        label: "Hand Rails",
        title: "Best Handrail Suppliers In Saudi Arabia",
        description: "Stylish safety railings in glass, metal, and wood.",
        image: "/service_handrail.png",
        icon: TrendingUp
    },
    {
        id: "curtains",
        label: "Curtains & Blinds",
        title: "Best Curtain Suppliers in Saudi Arabia",
        description: "Luxury window treatments and motorized systems.",
        image: "/service_curtains.png",
        icon: Blinds
    },
    {
        id: "interiors",
        label: "Commercial Interiors",
        title: "Commercial & Retail Interior Solutions",
        description: "Shopping malls, restaurants, showrooms, hospitals, and specialized fit-outs.",
        image: "/service_turnkey.png", // Using turnkey as placeholder or if user has one
        icon: Store
    }
];
