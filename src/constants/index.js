import { food, sunset, globe } from "../assets/icons";
import { Customer1, Customer2, Customer3 } from "../assets/images";
import { whatsapp, facebook, insta } from "../assets/icons";
import { beaches, hotel, fnb, culture, nature, vehicle, themepark, farm} from "../assets/icons";
import { BalikPulauCycling } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Penang" },
    { href: "#navigation", label: "Navigation"},
    { href: "#whyPenang", label: "Why Penang"},
    { href: '#testimonial', label: "Testimonial"}
];

export const statistics = [
    { value: '12.7M', label: 'Tourist' },
    { value: '100+', label: 'Famous Landmark' },
    { value: '1st', label: 'In Malaysia' },
]

export const funfact= [
    {
        imgURL: food,
        label: "World-Class Cuisine",
        subtext: "Savor the rich flavors of Penang, from street food delights to gourmet dining experiences."
    },
    {
        imgURL: globe,
        label: "Rich Cultural Heritage",
        subtext: "Explore the unique blend of cultures, traditions, and history in George Town, a UNESCO World Heritage Site."
    },
    {
        imgURL: sunset,
        label: "Breathtaking Scenery",
        subtext: "Enjoy pristine beaches, lush hills, and picturesque views that make Penang a tropical paradise."
    },
];

export const Testimonial = [
    {
        imgURL: Customer1,
        customerName: 'Morich Brown',
        rating: "4.9",
        feedback: "Penang is a dream destination! The food is incredible, the street art in George Town is captivating, and the beaches are stunning. The blend of culture, history, and natural beauty makes it unforgettable. A must-visit for everyone!"
    },
    {
        imgURL: Customer2,
        customerName: 'Lota Mongeskar',
        rating: "5.0",
        feedback: "Penang is a paradise for food lovers and culture enthusiasts! From delicious street food to vibrant street art and historical landmarks, every corner has something special. The friendly locals and laid-back vibe make it even better!"
    },
    {
        imgURL: Customer3,
        customerName: 'Ben White',
        rating: "4.7",
        feedback: "I loved the mix of old-world charm and modern attractions in Penang. Exploring George Town's heritage streets, relaxing on Batu Ferringhi beach, and tasting the famous Char Kway Teow were highlights of my trip. Can't wait to return!"
    }
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: whatsapp, alt: "whatsapp logo" },
    { src: insta, alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "Content",
        links: [
            { name: "Home", link: "/#home" },
            { name: "About Penang", link: "/#about" },
            { name: "Navigation", link: '/#navigation'},
            { name: "Why Penang", link: "/#whyPenang" },
            { name: "Testimonial", link: "/#testimonial" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "penang@gov.com", link: "/" },
            { name: "+604 5121 1131", link: "/" },
        ],
    },
];

export const navButtons = [
    {
        imgURL: beaches,
        label: "Beaches"
    },
    {
        imgURL: hotel,
        label: "Hotel"
    },
    {
        imgURL: fnb,
        label: "Food & Beverages",
        route: "/foodandbeverage"
    },
    {
        imgURL: culture,
        label: "Culture & Heritages"
    },
    {
        imgURL: nature,
        label: "Nature & Wildlife"
    },
    {
        imgURL: themepark,
        label: "Themeparks"
    },
    {
        imgURL: vehicle,
        label: "Transportation"
    },
    {
        imgURL: farm,
        label: "Farm & Animals"
    },
]

export const mustDo = [
    {
        title: "Cycling at Balik Pulau",
        rating: "4.9",
        category: "outdoor",
        location: "Balik Pulau @ Balik Kampung",
        price: 10,
        imgURL: BalikPulauCycling
    },
    {
        title: "Cycling at Balik Pulau",
        rating: "4.9",
        category: "outdoor",
        location: "Balik Pulau @ Balik Kampung",
        price: 10,
        imgURL: BalikPulauCycling
    },
    {
        title: "Cycling at Balik Pulau",
        rating: "4.9",
        category: "outdoor",
        location: "Balik Pulau @ Balik Kampung",
        price: 10,
        imgURL: BalikPulauCycling
    },
    {
        title: "Cycling at Balik Pulau",
        rating: "4.9",
        category: "outdoor",
        location: "Balik Pulau @ Balik Kampung",
        price: 10,
        imgURL: BalikPulauCycling
    }
]
