import clock from "../../assets/projects_images/clock.jpg";
import calc from "../../assets/projects_images/calc.jpg";
import todo from "../../assets/projects_images/todo.jpg";
import salon from "../../assets/projects_images/salon.jpg";
import avatar from "../../assets/projects_images/avatar.jpg";
import quote from "../../assets/projects_images/quote.jpg";

const data_projects = [
  {
    name: "Calculator",
    image: calc,
    deployed_url: "https://carry4calc.netlify.app/",
    github_url: "https://github.com/Aashutosh-Kumaar/calculator",
    category: ["react.js"],
  },

  {
    name: "Quotes",
    image: quote,
    deployed_url: "https://carry4-quotes.netlify.app/",
    github_url: "https://github.com/Aashutosh-Kumaar/Quotes",
    category: ["react.js"],
  },
  {
    name: "Avatar-Astronomy",
    image: avatar,
    deployed_url:
      "https://aashutosh-kumaar.github.io/avatar-astronomy.github.io/",
    github_url:
      "https://github.com/Aashutosh-Kumaar/avatar-astronomy.github.io",
    category: ["react.js"],
  },

  {
    name: "ToDo List",
    image: todo,
    deployed_url: "https://carry2todollist.netlify.app",
    github_url: "https://github.com/Aashutosh-Kumaar/ToDo-List",
    category: ["material ui", "react.js"],
  },
  {
    name: "Digital Clock",
    image: clock,
    deployed_url: "https://carry3clock.netlify.app",
    github_url: "https://github.com/Aashutosh-Kumaar/Digital-clock",
    category: ["material ui", "react.js"],
  },
  {
    name: "Salon",
    image: salon,

    github_url: "https://github.com/Aashutosh-Kumaar/Salon-Website",
    category: ["bootstrap"],
  },
];

export default data_projects;
