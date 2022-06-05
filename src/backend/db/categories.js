import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    catImg:"./asset/lofi.jpg",
    genre:"LOFI",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    catImg:"./asset/romantic.jpg",
    genre:"ROMANTIC",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    catImg:"./asset/sad.jpg",
    genre:"SAD",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    catImg:"./asset/evergreen.jpg",
    genre:"EVERGREEN",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    catImg:"./asset/pop.jpeg",
    genre:"POP",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },

];
