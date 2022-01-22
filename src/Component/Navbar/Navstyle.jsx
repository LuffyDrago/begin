import styled from "styled-components";

// export const List = styled.div`
//   @media only screen and (min-width: 560px) {
//     display: flex;
//     flex-direction: row;
//   }
// `;

// export const Navbar = styled.div`
//   background-color: #e3eaf4;
//   padding: 1rem;
//   a {
//     color: black;
//   }
//   // Desktop view
//   @media only screen and (min-width: 560px) {
//     .nav {
//       &__toggle {
//         display: none;
//       }
//     }
//   }

//   .menus {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     align-items: center;

//     background-color: #e3eaf4;
//     /* ul {
//       display: none;
//     } */
//   }

//   // Toggle the hamburger menu in mobile view

//   #nav__checkbox:checked ~ .menus {
//     display: block;
//   }

//   //Change from menu to close icon on tap
//   #nav__checkbox:checked ~ label.nav__toggle .close {
//     display: block;
//   }

//   #nav__checkbox:checked ~ label.nav__toggle .menu {
//     display: none;
//   }
// `;

// export const Logo = styled.div`
//   margin-right: auto;
//   display: block;
//   font-size: 20px;
//   line-height: 21px;
//   font-weight: 700;
// `;

export const Navbar = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  background-color: #e3eaf4;
`;

export const Logo = styled.div`
  cursor: pointer;
  font-family: "pp-telegraf-3", sans-serif;
  margin-right: auto;
  font-size: 20px;
  line-height: 21px;
  font-weight: 700;
  a {
    color: black;
  }
`;

export const List = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
    align-items: center;
  }
  display: inline-block;
  padding: 0px 20px;
  a {
    color: black;
  }
  .lines::after {
    content: "";
    width: 0%;
    height: 1px;
    display: block;
    background-color: #232323;
    margin-bottom: 0px;
    margin-top: 10px;
  }

  .lines:hover::after {
    width: 100%;
    transition: all 0.5s;
  }

  .cta {
    padding: 13px 26px;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
  }
`;

export const MenuIcon = styled.div`
  @media (max-width: 600px) {
    font-size: 14px;
    display: block;
  }

  display: none;

  position: absolute;
  cursor: pointer;
  margin-top: 1rem;
  right: 0;
  width: 3rem;

  label {
    width: 35px;
    height: 5px;
    background-color: black;
    position: absolute;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      width: 35px;
      height: 5px;
      background-color: black;
      position: absolute;
      display: block;
      color: black;
      transition: all 0.6s cubic-bezier(1, 0, 0, 1);
    }

    &::before {
      top: -250%;
      left: 0%;
      transform: rotateZ(0deg);
      transform-origin: left top;
    }

    &::after {
      bottom: -250%;
      left: 0%;
      transform: rotateZ(0deg);
      transform-origin: left bottom;
    }
  }

  #toggle:checked ~ label::before {
    content: "";
    background-color: black;
    transform: rotateZ(41deg);
    /* left: 10%; */
    margin-right: 10px;
    margin-top: 3px;
  }

  #toggle:checked ~ label::after {
    content: "";
    background-color: black;
    transform: rotateZ(-41deg);
    /* left: 10%; */
    margin-right: 10px;
  }

  #toggle:checked ~ label {
    background-color: transparent;
  }

  #toggle ~ label {
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }

  input {
    display: none;
  }
`;

// export const MenuIcon = styled.div`
//   @media (max-width: 600px) {
//     font-size: 14px;
//     display: block;
//   }
//   position: absolute;
//   cursor: pointer;
//   /* margin-top: 1rem; */
//   right: 0;
//   width: 3rem;

//   svg {
//     width: 1.5rem;
//   }

//   .close {
//     display: none;
//   }

//   &__checkbox {
//     display: none;
//   }

//   input {
//     display: none;
//   }
// `;
