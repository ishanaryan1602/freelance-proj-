import logo from "../assets/yam-logo.png";
import sample from "../assets/sampleImg.jpg";

export const imagesAssets = {
  logo,
  sample,
};

import one from "../assets/masonry_img/1.jpg";
import two from "../assets/masonry_img/2.jpg";
import three from "../assets/masonry_img/3.jpg";
import four from "../assets/masonry_img/4.jpg";
import five from "../assets/masonry_img/5.jpg";
import six from "../assets/masonry_img/6.jpg";

export const masonry_1 = [one, two, three, four, five, six];

export const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Work", url: "/work" },
  { name: "Service", url: "/service" },
  { name: "About YAM", url: "/about" },
  { name: "Support", url: "/support" },
];

export const nav_hook_line = "YOUR VISUAL SOLUTIONS AGENCY";

export const home_page_tags = [
  {
    text: "FREE SPACE. LET YOUR CREATIVITY DRIVES YOU",
    boldRange: [0, 10],
  },
  {
    text: "ALL OF YOUR INPUTS, MATTERS A LOT",
    boldRange: [7, 18],
  },
  {
    text: "LESS IS MORE",
    boldRange: [0, 3],
  },
  {
    text: "CHANGES ARE CONSTANT",
    boldRange: [0, 7],
  },
];

export const sidebar_work = [
  {
    main_heading: "Photoshoots",
    sub_menu: [
      "fashion",
      "concept",
      "modeling",
      "commercial",
      "restaurant",
      "food",
      "nature",
    ],
    selected: true,
  },
  {
    main_heading: "Brand Building",
    sub_menu: ["fashion", "concept", "modeling", "commercial"],
  },
  {
    main_heading: "Video Creation",
    sub_menu: ["nature"],
  },
  {
    main_heading: "Animation",
    sub_menu: ["food", "nature"],
  },
  {
    main_heading: "Web Development",
    sub_menu: ["concept"],
  },
];
