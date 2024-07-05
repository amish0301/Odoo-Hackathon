import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin_icon (1).png";

export const socialMedia = [
  { src: facebook, alt: "facebook logo", hreef: "https://www.facebook.com/" },
  { src: twitter, alt: "twitter logo", href: "https://twitter.com/" },
  { src: instagram, alt: "instagram logo", href: "https://www.instagram.com/" },
  { src: linkedin, alt: "instagram logo", href: "https://www.linkedin.com/" },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "user@gms.com",
        href: "mailto:user@gms.com",
      },
      { name: "+91554862354", href: "tel:+91554862354" },
    ],
  },
  {
    title: "Policy",
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {

      }
    ]
  }
];
