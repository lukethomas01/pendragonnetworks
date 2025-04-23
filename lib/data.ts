// Service data for Pendragon Networks

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  useCases: { title: string; description: string }[];
  testimonials?: { quote: string; author: string; company: string }[];
}

export interface Location {
  id: string;
  name: string;
  county: string;
  postcode: string;
  description: string;
}

// Services data
export const services: Service[] = [
  {
    id: "rack-installations",
    title: "Rack & Stack Installations",
    shortDescription: "Professional installation and configuration of server racks, network equipment, and hardware components.",
    fullDescription: 
      "Our rack and stack service provides complete installation and configuration of server racks, switches, routers, and all network hardware components. We ensure optimal cable management, proper equipment mounting, and complete system testing to guarantee reliable infrastructure performance. Our experienced technicians follow industry best practices for equipment spacing, cooling considerations, and power distribution.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    features: [
      "Complete rack assembly and mounting",
      "Server and network equipment installation",
      "Cable management solutions",
      "Power distribution setup",
      "System testing and validation",
      "Documentation and asset management",
      "Post-installation support"
    ],
    useCases: [
      {
        title: "Data Center Migrations",
        description: "Seamless relocation of servers and equipment to new data center facilities with minimal downtime."
      },
      {
        title: "Server Room Expansions",
        description: "Professional installation of new racks and hardware during business growth or technology upgrades."
      },
      {
        title: "Disaster Recovery Sites",
        description: "Setting up redundant infrastructure for business continuity and emergency operations."
      }
    ],
    testimonials: [
      {
        quote: "Pendragon Networks handled our complete data center migration with exceptional attention to detail. Their team worked efficiently and the documentation provided was comprehensive.",
        author: "David Williams",
        company: "Cardiff Financial Services"
      }
    ]
  },
  {
    id: "network-engineering",
    title: "Network Engineering",
    shortDescription: "Expert design, deployment, and optimization of network infrastructure for businesses of all sizes.",
    fullDescription: 
      "Our network engineering services provide end-to-end solutions for designing, implementing, and optimizing your organization's network infrastructure. From initial assessment and planning to deployment and ongoing maintenance, our certified engineers ensure your network meets the highest standards for performance, reliability, and security. We specialize in complex multi-site deployments, network upgrades, and troubleshooting network performance issues.",
    icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    features: [
      "Network architecture design",
      "LAN/WAN implementation",
      "Network security solutions",
      "VPN configuration and setup",
      "Network monitoring and management",
      "Bandwidth optimization",
      "Routing and switching configuration"
    ],
    useCases: [
      {
        title: "Office Network Setup",
        description: "Comprehensive networking solutions for new office locations or renovations."
      },
      {
        title: "Multi-site Connectivity",
        description: "Secure and reliable network connections between multiple business locations."
      },
      {
        title: "Network Performance Optimization",
        description: "Troubleshooting and enhancement of existing networks to improve speed and reliability."
      }
    ],
    testimonials: [
      {
        quote: "The team at Pendragon designed and implemented a complex network connecting our three office locations. The solution has been rock-solid and their support exceptional.",
        author: "Sarah Jenkins",
        company: "Swansea Manufacturing Group"
      }
    ]
  },
  {
    id: "wifi-deployment",
    title: "Wi-Fi Surveys & Deployment",
    shortDescription: "Comprehensive wireless network surveys, planning, and professional installation services.",
    fullDescription: 
      "Our Wi-Fi deployment services start with detailed site surveys to assess your environment's specific requirements and challenges. Using advanced tools, we analyze signal coverage, interference sources, and capacity needs to design an optimal wireless solution. Our team handles access point placement, configuration, testing, and performance validation to ensure complete coverage and seamless roaming throughout your facility. We specialize in high-density deployments for environments where reliable connectivity is critical.",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
    features: [
      "Comprehensive wireless site surveys",
      "Heat mapping and coverage analysis",
      "Access point placement optimization",
      "Channel and power planning",
      "Interference mitigation",
      "High-density Wi-Fi solutions",
      "Guest network configurations"
    ],
    useCases: [
      {
        title: "Campus-Wide Wireless Coverage",
        description: "Full wireless coverage for educational institutions, hospitals, or large corporate campuses."
      },
      {
        title: "Warehouse and Industrial Wi-Fi",
        description: "Robust wireless solutions for challenging industrial environments with mobile scanning devices."
      },
      {
        title: "Hotel and Hospitality Networks",
        description: "Reliable guest and staff wireless networks across hospitality properties."
      }
    ],
    testimonials: [
      {
        quote: "Pendragon Networks solved our persistent Wi-Fi issues across our university campus. Their detailed survey identified all problem areas, and their implementation has provided reliable coverage throughout all buildings.",
        author: "Prof. Thomas Evans",
        company: "Swansea University Technical Department"
      }
    ]
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    shortDescription: "High-quality cable installation, testing, and certification for reliable network infrastructure.",
    fullDescription: 
      "Our structured cabling services provide the physical foundation for your entire IT infrastructure. We design and install comprehensive cabling systems using high-quality materials that exceed industry standards. From copper and fiber optic installations to cable management solutions, our certified technicians ensure precise terminations, proper labeling, and complete testing to verify performance. We provide detailed documentation for all installations and offer warranties on our workmanship.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    features: [
      "Cat6/6A/7 copper cabling installation",
      "Fiber optic cabling and termination",
      "Cable testing and certification",
      "Patch panel installation",
      "Cable management solutions",
      "Telecommunications room organization",
      "As-built documentation"
    ],
    useCases: [
      {
        title: "New Building Infrastructure",
        description: "Complete cabling infrastructure for new construction or major renovations."
      },
      {
        title: "Office Relocations",
        description: "Structured cabling systems for office moves or expansions with minimal disruption."
      },
      {
        title: "Technology Upgrades",
        description: "Upgrading existing cabling infrastructure to support newer, higher-speed technologies."
      }
    ],
    testimonials: [
      {
        quote: "The cabling work Pendragon Networks completed for our new office building was impeccable. The attention to detail and quality of installation exceeded our expectations.",
        author: "Richard Davies",
        company: "Bridgend Office Solutions"
      }
    ]
  },
  {
    id: "remote-support",
    title: "Remote Support Services",
    shortDescription: "Comprehensive remote monitoring, diagnostics, and technical support for your IT infrastructure.",
    fullDescription: 
      "Our remote support services provide proactive monitoring and management of your network infrastructure around the clock. Using advanced monitoring tools, we can detect and resolve many issues before they impact your business operations. Our team of experts is available to provide remote troubleshooting, regular system maintenance, security updates, and performance optimization. We offer tiered support packages to meet the specific needs and budget of your organization.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    features: [
      "24/7 network monitoring",
      "Proactive issue detection",
      "Remote diagnostics and troubleshooting",
      "Security patch management",
      "Performance optimization",
      "Regular system maintenance",
      "Detailed reporting and analytics"
    ],
    useCases: [
      {
        title: "Managed IT Services",
        description: "Ongoing support and management of IT infrastructure for businesses without in-house IT teams."
      },
      {
        title: "After-Hours Support",
        description: "Extended support coverage outside of normal business hours for critical systems."
      },
      {
        title: "Network Health Monitoring",
        description: "Continuous monitoring of network performance, security, and availability."
      }
    ],
    testimonials: [
      {
        quote: "Having Pendragon Networks handle our remote monitoring has given us peace of mind. Their team has detected and resolved several potential issues before they became problems.",
        author: "Michelle Cooper",
        company: "Port Talbot Medical Associates"
      }
    ]
  },
  {
    id: "cctv-integration",
    title: "CCTV & IP Camera Integration",
    shortDescription: "Installation and configuration of security camera systems integrated with your network.",
    fullDescription: 
      "Our CCTV and IP camera integration services provide comprehensive security monitoring solutions for businesses of all sizes. We design and install complete surveillance systems using the latest IP camera technology, integrated seamlessly with your existing network infrastructure. Our solutions include high-definition cameras, network video recorders, storage solutions, and remote viewing capabilities. We ensure proper camera placement, optimal coverage, and secure access to footage while maintaining network performance.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    features: [
      "IP camera system design",
      "High-definition camera installation",
      "Network video recorder (NVR) setup",
      "Storage and retention configuration",
      "Remote viewing setup",
      "Motion detection and alerts",
      "Network bandwidth optimization"
    ],
    useCases: [
      {
        title: "Office Security Systems",
        description: "Complete surveillance coverage for office buildings and business premises."
      },
      {
        title: "Retail Security Solutions",
        description: "Loss prevention and security monitoring for retail environments."
      },
      {
        title: "Remote Site Monitoring",
        description: "Surveillance systems for unmanned locations or facilities requiring periodic monitoring."
      }
    ],
    testimonials: [
      {
        quote: "Pendragon Networks installed a comprehensive IP camera system across our retail locations. The image quality is excellent and the remote viewing functionality has been invaluable.",
        author: "James Morris",
        company: "Cardiff Retail Group"
      }
    ]
  },
  {
    id: "ubiquiti-cisco-solutions",
    title: "Ubiquiti & Cisco Solutions",
    shortDescription: "Specialized implementation and support for Ubiquiti and Cisco networking equipment.",
    fullDescription: 
      "As certified partners for both Ubiquiti and Cisco, we provide specialized expertise in designing, implementing, and supporting solutions based on these leading networking platforms. Our team has extensive experience with UniFi and EdgeMAX product lines from Ubiquiti and the complete range of Cisco networking equipment. We offer tailored solutions including wireless deployments, switching infrastructure, routing, security appliances, and unified communications systems customized to your specific requirements.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    features: [
      "UniFi wireless network design",
      "Cisco switching and routing",
      "EdgeMAX implementation",
      "Cisco Meraki cloud networking",
      "Network security solutions",
      "VoIP and unified communications",
      "Centralized management systems"
    ],
    useCases: [
      {
        title: "Enterprise Network Deployments",
        description: "Complete Cisco-based networking solutions for large enterprise environments."
      },
      {
        title: "Small Business UniFi Systems",
        description: "Cost-effective Ubiquiti UniFi deployments for small to medium businesses."
      },
      {
        title: "Hybrid Networking Solutions",
        description: "Mixed-vendor environments leveraging the strengths of both Cisco and Ubiquiti products."
      }
    ],
    testimonials: [
      {
        quote: "The Ubiquiti UniFi system Pendragon Networks implemented has transformed our network. The performance and centralized management capabilities have exceeded our expectations.",
        author: "David Hughes",
        company: "Llanelli Technology Group"
      }
    ]
  }
];

// Locations data
export const locations: Location[] = [
  {
    id: "cardiff",
    name: "Cardiff",
    county: "South Glamorgan",
    postcode: "CF10",
    description: "The capital and largest city of Wales, Cardiff is a major business hub with growing technology and service sectors. Pendragon Networks provides comprehensive networking services across Cardiff's business districts including Cardiff Bay, Central Cardiff, and surrounding business parks."
  },
  {
    id: "swansea",
    name: "Swansea",
    county: "West Glamorgan",
    postcode: "SA1",
    description: "As Wales' second largest city, Swansea has a diverse business community spanning traditional industries and emerging tech companies. Our Swansea services cover the entire SA postcode area, including the Enterprise Zone and university innovation campuses."
  },
  {
    id: "bridgend",
    name: "Bridgend",
    county: "Mid Glamorgan",
    postcode: "CF31",
    description: "Located between Cardiff and Swansea, Bridgend is home to our company headquarters. We provide local expertise to businesses throughout Bridgend county borough, from industrial parks to town center businesses."
  },
  {
    id: "port-talbot",
    name: "Port Talbot",
    county: "Neath Port Talbot",
    postcode: "SA12",
    description: "An industrial town with significant manufacturing presence, Port Talbot businesses benefit from our specialized industrial network solutions designed for challenging environments and high reliability requirements."
  },
  {
    id: "llanelli",
    name: "Llanelli",
    county: "Carmarthenshire",
    postcode: "SA14",
    description: "Located in the historic county of Carmarthenshire, Llanelli has a growing business community transitioning from traditional industries to diverse commercial sectors requiring robust network infrastructure."
  },
  {
    id: "merthyr",
    name: "Merthyr Tydfil",
    county: "Mid Glamorgan",
    postcode: "CF47",
    description: "Merthyr Tydfil is experiencing business regeneration with new commercial developments requiring modern network infrastructure. Our services support this growth with scalable, future-proof networking solutions."
  },
  {
    id: "aberdare",
    name: "Aberdare",
    county: "Rhondda Cynon Taf",
    postcode: "CF44",
    description: "Located in the Cynon Valley, Aberdare businesses rely on our structured cabling and network engineering services to maintain connectivity across challenging geographical terrain."
  },
  {
    id: "carmarthen",
    name: "Carmarthen",
    county: "Carmarthenshire",
    postcode: "SA31",
    description: "One of the oldest towns in Wales, Carmarthen combines historic significance with modern business needs. Our services extend throughout Carmarthenshire, supporting businesses with reliable network infrastructure."
  }
];

// Generate all possible service-location combinations for dynamic routing
export const serviceLocations = services.flatMap(service => 
  locations.map(location => ({
    service,
    location,
    slug: `${service.id}/${location.id}`
  }))
);

// Helper function to get service by ID
export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

// Helper function to get location by ID
export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id);
}

// Helper function to get service-location combination
export function getServiceLocation(serviceId: string, locationId: string) {
  const service = getServiceById(serviceId);
  const location = getLocationById(locationId);
  
  if (!service || !location) return null;
  
  return { service, location };
}
