import styled from "styled-components";

export const ServeSection = styled.div`
  padding: 120px 32px 100px;
  background: white;
  border: 1px solid transparent;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;

  a {
    color: black;
    text-decoration: underline;
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    line-height: 40px;
    letter-spacing: 0.18px;
  }

  img {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-right: auto;
    margin-left: auto;
    border-radius: 15px;
    background-color: #e3eaf4;
    padding: 4rem;
    position: relative;
    left: -63px;
  }
`;

export const Heroheading = styled.div`
  p {
    /* font-family: "pp-telegraf", sans-serif; */
    font-family: "Roboto", sans-serif;
    font-size: 45px;
    line-height: 75px;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export const Container = styled.div`
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    .heroleft p {
      /* font-family: "pp-telegraf", sans-serif; */
      font-family: "Roboto", sans-serif;
      font-size: 45px;
      line-height: 83px;
      font-weight: 200;
      margin-top: 20px;
      margin-bottom: 10px;
      display: block ruby;
    }

    /* .heroright {
      width: 100% !important;
    } */
    .heroright {
      width: 100% !important;
    }
    .heroleft {
      width: 100% !important;
    }

    .HeroRightText {
      font-size: 18px !important;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .heroright {
      width: 100% !important;
    }
    .heroleft {
      width: 100% !important;
    }
    .HeroRightText {
      font-size: 18px !important;
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  .heroleft {
    width: 50%;
  }
  .heroright {
    width: 50%;

    .HeroRightText {
      margin-top: 5em;
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerTwo = styled.div`
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      font-size: 18px !important;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }

  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;

  .twosides {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }
  .firstside {
    width: 50%;
    display: flex;
    align-self: flex-start;
    justify-content: center;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 45px;
    margin-top: 1rem;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      /* margin-top: 5em; */
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerThree = styled.div`
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;

  .twosides {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }
  .firstside {
    width: 50%;
    display: flex;
    align-self: flex-start;
    justify-content: center;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 45px;
    margin-top: 1rem;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      /* margin-top: 5em; */
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerFive = styled.div`
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;

  .twosides {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }
  .firstside {
    width: 50%;
    display: flex;
    align-self: flex-start;
    justify-content: center;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 45px;
    margin-top: 1rem;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      /* margin-top: 5em; */
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerSix = styled.div`
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;

  .twosides {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }
  .firstside {
    width: 50%;
    display: flex;
    align-self: flex-start;
    justify-content: center;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 45px;
    margin-top: 1rem;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      /* margin-top: 5em; */
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerSeven = styled.div`
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .twosides {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .firstside {
      width: 100% !important;
      font-size: 35px !important;
    }
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;

  .twosides {
    display: flex;
    margin-top: 5em;
    justify-content: center;
  }
  .firstside {
    width: 50%;
    display: flex;
    align-self: flex-start;
    justify-content: center;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 45px;
    margin-top: 1rem;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      /* margin-top: 5em; */
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;
