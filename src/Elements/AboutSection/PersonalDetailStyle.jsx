import styled from "styled-components";
export const PersonalSection = styled.div`
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

    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }

    .firstside {
      width: 0% !important;
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
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
    .firstside {
      width: 0% !important;
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  .twosides {
    display: flex;
  }
  .firstside {
    width: 50%;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      margin-top: 5em;
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerThree = styled.div`
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

    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }

    .firstside {
      width: 0% !important;
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
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
    .firstside {
      width: 0% !important;
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  .twosides {
    display: flex;
  }
  .firstside {
    width: 50%;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      margin-top: 5em;
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;

export const ContainerFour = styled.div`
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

    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }

    .firstside {
      width: 0% !important;
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
    .lastside {
      width: 100% !important;
      margin-top: 20px;
      .lastsidetext {
        font-size: 18px !important;
      }
    }
    .firstside {
      width: 0% !important;
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;

  .twosides {
    display: flex;
  }
  .firstside {
    width: 50%;
  }

  .lastside {
    width: 50%;

    .lastsidetext {
      margin-top: 5em;
      line-height: 40px;
      letter-spacing: 0.18px;
      font-size: 22px;
    }
  }
`;
