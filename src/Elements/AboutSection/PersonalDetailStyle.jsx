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
