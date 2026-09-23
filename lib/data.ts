import { Ruler, Printer, Sparkles, Boxes, Gem, PenTool, Zap, ShieldCheck, Layers } from "lucide-react";

/** Every asset path lives here. Replace the files in /public, not these paths. */
export const assets = {
  heroVideo: "/videos/packaging-hero.mp4",
  heroImage: "/images/hero-packaging.jpg",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Customization", href: "#customization" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export const products = [
  { id: "01", name: "Custom Product Boxes", category: "Retail", description: "Premium boxes designed specifically around your product.", image: "/images/custom-box.jpg", alt: "Custom printed retail product box on a studio surface" },
  { id: "02", name: "Mailer Boxes", category: "E-commerce", description: "Stylish and durable packaging for e-commerce brands.", image: "/images/mailer-box.jpg", alt: "Open kraft mailer box with tissue paper" },
  { id: "03", name: "Shipping Boxes", category: "Logistics", description: "Strong packaging designed for safe transportation.", image: "/images/shipping-box.jpg", alt: "Stacked corrugated shipping boxes" },
  { id: "04", name: "Gift Boxes", category: "Gifting", description: "Elegant packaging for gifts and premium products.", image: "/images/gift-box.jpg", alt: "Rigid gift box with ribbon" },
  { id: "05", name: "Cosmetic Boxes", category: "Beauty", description: "Premium packaging for beauty and skincare brands.", image: "/images/cosmetic-box.jpg", alt: "Slim cosmetic box beside a serum bottle" },
  { id: "06", name: "Food Packaging", category: "Food", description: "Functional and attractive packaging for food brands.", image: "/images/food-box.jpg", alt: "Kraft food packaging with a window" },
];

export const featuredSpecs = [
  { icon: Ruler, label: "Custom Size" },
  { icon: Layers, label: "Premium Materials" },
  { icon: Printer, label: "Custom Printing" },
  { icon: Sparkles, label: "Special Finishes" },
];

export const customOptions = [
  { icon: Ruler, title: "Custom Size", text: "Designed around your exact product dimensions." },
  { icon: Printer, title: "Custom Printing", text: "Bring your brand identity directly to the packaging." },
  { icon: Gem, title: "Premium Finishes", text: "Matte, gloss, embossing and foil finishes." },
  { icon: Boxes, title: "Custom Structure", text: "Choose the box style and opening experience that fits your product." },
];

export const steps = [
  { n: "01", title: "Tell Us What You Need", text: "Share your product and packaging requirements." },
  { n: "02", title: "Create Your Design", text: "Develop your custom packaging concept." },
  { n: "03", title: "Approve Your Sample", text: "Review the design before production." },
  { n: "04", title: "Produce & Deliver", text: "We manufacture and deliver your packaging." },
];

export const benefits = [
  { icon: Layers, title: "Premium Materials", text: "High-quality materials built for presentation and protection." },
  { icon: PenTool, title: "Custom Design", text: "Packaging designed around your brand." },
  { icon: Zap, title: "Fast Production", text: "Efficient production without compromising quality." },
  { icon: ShieldCheck, title: "Reliable Quality", text: "Consistent quality from design to delivery." },
];

/** aspect = Tailwind aspect class; any replacement image is cropped to fit. */
export const gallery = [
  { image: "/images/gallery-1.jpg", label: "Rigid Presentation Box", aspect: "aspect-[4/5]", alt: "Premium rigid presentation box" },
  { image: "/images/gallery-2.jpg", label: "Retail Range", aspect: "aspect-[4/3]", alt: "Assorted retail packaging boxes" },
  { image: "/images/gallery-3.jpg", label: "Mailer Set", aspect: "aspect-square", alt: "Set of branded mailer boxes" },
  { image: "/images/gallery-4.jpg", label: "Cosmetic Collection", aspect: "aspect-[3/4]", alt: "Cosmetic packaging collection" },
  { image: "/images/gallery-5.jpg", label: "Gift Series", aspect: "aspect-[4/3]", alt: "Gift box series" },
];

export const stats = [
  { value: "10K+", label: "Boxes Produced" },
  { value: "500+", label: "Brands Served" },
  { value: "50+", label: "Packaging Designs" },
  { value: "99%", label: "Quality Focus" },
];

export const testimonials = [
  { name: "Amelia Hart", company: "Lumen Skincare", rating: 5, text: "The unboxing feels as considered as the formula inside. Our customers mention the box in almost every review." },
  { name: "Daniel Okafor", company: "Northfield Coffee", rating: 5, text: "Sample to delivery was smooth, and the structure protected every shipment. Exactly the shelf presence we wanted." },
  { name: "Sofia Marin", company: "Atelier Bloom", rating: 4, text: "They understood our brand quickly and the finishes look far more expensive than they cost." },
];

export const footerLinks = ["Products", "Customization", "Process", "About", "Contact"];
