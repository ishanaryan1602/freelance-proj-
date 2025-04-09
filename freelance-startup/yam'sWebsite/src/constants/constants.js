import logo from "../assets/yam-logo.png";
import sample from "../assets/sampleImg.jpg";

export const imagesAssets = {
  logo,
  sample,
};

import one from '../assets/masonry_img/1.jpg'
import three from '../assets/masonry_img/3.jpg'
import fifty_seven_edit from '../assets/masonry_img/57_edit.jpg'
import _DSC0001_Edit from '../assets/masonry_img/_DSC0001-Edit.jpg'
import _DSC0024_Edit_2 from '../assets/masonry_img/_DSC0024-Edit-2.jpg'
import _DSC0032_2 from '../assets/masonry_img/_DSC0032-2.jpg'
import seven from '../assets/masonry_img/07.jpg'
import eight from '../assets/masonry_img/08.jpg'
import poster from '../assets/masonry_img/Poster.jpg'
import zer_two_zero_one from '../assets/masonry_img/02-1.jpg'


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
  },
  {
    main_heading: "Brand Building",
    sub_menu: ["advertising", "branding", "publicity", "strategy", "design"],
  },
  {
    main_heading: "Video Creation",
    sub_menu: ["documentary", "short film"],
  },
  {
    main_heading: "Animation",
    sub_menu: ["2D", "motion graphics", "vfx"],
  },
  {
    main_heading: "Web Development",
    sub_menu: ["responsive design"],
  },
];

export const imageMapping = {
  // fashion: [one, two, three, four,five,six,seven],
  fashion: [_DSC0024_Edit_2,one,_DSC0001_Edit,three,_DSC0032_2,fifty_seven_edit,seven,eight,zer_two_zero_one],
  // concept: [one, two, three, four, two, one],
  // modeling: [one, two, three, four],
  // commercial: [one, two, three, four],
  // restaurant: [one, two, three, four],
  // food: [four, one, two],
  // nature: [one, two, three, four, two, one],
  // advertising: [two, three, four],
  // branding: [one, three],
  // publicity: [two, four],
  // strategy: [one, four],
  // design: [three, one],
  // documentary: [two],
  // "short film": [four, one, two, three, four, four, one, three, one],
  // "2D": [one, two, three],
  // "motion graphics": [four],
  // vfx: [one, two, three],
  // "responsive design": [four, two, one, four, one, two, three, four, four, one, three, one],
};
