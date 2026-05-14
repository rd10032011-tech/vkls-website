import { Truck, Warehouse, PackageCheck, BarChart4, RotateCcw, Ship } from "lucide-react";

export const services = [
  {
    slug: "warehousing-storage",
    icon: <Warehouse className="h-8 w-8" />,
    title: "Warehousing & Storage",
    shortDesc: "Over 3,00,000 sq.ft of high-security, hazardous-material certified storage.",
    fullDesc: "Our warehousing facilities are engineered for the most demanding industrial requirements. We provide specialized storage zones for petrochemicals, hazardous materials, and temperature-sensitive goods. With over 3 lakh square feet of space across South India, we ensure your inventory is safe, secure, and ready for rapid distribution.",
    features: [
      "Hazardous Material (HazMat) certified storage",
      "24/7 CCTV and physical security",
      "Customs bonded warehousing options",
      "Temperature and humidity control zones",
      "State-of-the-art fire suppression systems"
    ],
    image: "/images/services/warehousing-storage.webp"
  },
  {
    slug: "order-fulfillment",
    icon: <PackageCheck className="h-8 w-8" />,
    title: "Order Fulfillment",
    shortDesc: "Precision picking, kitting, and dispatch services for industrial throughput.",
    fullDesc: "Our fulfillment services act as an extension of your manufacturing process. We handle complex picking requirements, specialized industrial packaging, and streamlined dispatch, ensuring your customers receive their orders with absolute accuracy.",
    features: [
      "High-precision picking and packing",
      "Industrial-grade labeling & packaging",
      "Cross-docking for speed-to-market",
      "Kitting and value-added assembly",
      "Full ERP system integration"
    ],
    image: "/images/services/order-fulfillment.webp"
  },
  {
    slug: "transportation",
    icon: <Truck className="h-8 w-8" />,
    title: "Transportation",
    shortDesc: "Dedicated hazardous-material logistics fleet across all major South Indian hubs.",
    fullDesc: "We operate a dedicated fleet of specialized tankers and heavy-duty vehicles, specifically maintained for the safe transport of petrochemicals. Our logistics network ensures reliable distribution across South India's industrial backbone.",
    features: [
      "Real-time GPS transit monitoring",
      "Specialized petrochemical tanker fleet",
      "Safety-certified and trained drivers",
      "Dynamic route optimization",
      "Periodic safety and compliance audits"
    ],
    image: "/images/services/transportation.webp"
  },
  {
    slug: "inventory-management",
    icon: <BarChart4 className="h-8 w-8" />,
    title: "Inventory Management",
    shortDesc: "Real-time, AI-driven visibility and stock control for high-value inventory.",
    fullDesc: "Leveraging advanced Warehouse Management Systems, we provide granular visibility into your inventory. Our proactive, data-driven approach minimizes carrying costs and optimizes stock health through real-time replenishment signals.",
    features: [
      "Real-time stock level dashboards",
      "Automated replenishment alerts",
      "Detailed movement analytics",
      "Cycle counting & audit support",
      "API-first integration for seamless tracking"
    ],
    image: "/images/services/inventory-management.webp"
  },
  {
    slug: "reverse-logistics",
    icon: <RotateCcw className="h-8 w-8" />,
    title: "Reverse Logistics",
    shortDesc: "Expert management of industrial returns, packaging recovery, and waste flows.",
    fullDesc: "Closing the loop in your supply chain, we provide comprehensive reverse logistics. From returning empty industrial containers to managing returns and waste-flow compliance, we ensure your operations are circular, efficient, and regulatory-compliant.",
    features: [
      "Container and asset recovery management",
      "Industrial returns reconciliation",
      "Waste-flow regulatory documentation",
      "Packaging sustainability audits",
      "Reverse supply chain optimization"
    ],
    image: "/images/services/reverse-logistics.jpg"
  },
  {
    slug: "freight-forwarding",
    icon: <Ship className="h-8 w-8" />,
    title: "Freight Forwarding",
    shortDesc: "Our upcoming strategic vision: Global trade lanes, borderless forwarding, and multimodal integration.",
    fullDesc: "Freight Forwarding is our strategic evolution. We are aggressively expanding our multimodal capabilities to provide global trade lane management. By integrating our regional petrochemical logistics expertise with global network partners, we are building the future of borderless industrial trade.",
    features: [
      "Visionary multimodal logistics expansion",
      "Global network partnerships in development",
      "Strategic port-to-port trade lanes",
      "End-to-end multimodal project cargo",
      "Upcoming regulatory trade facilitation"
    ],
    image: "/images/services/freight-forwarding.webp"
  }
];
