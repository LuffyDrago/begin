import styled from "styled-components";

export const MainFooter = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
`;

export const InnerFooter = styled.div`
  padding: 170px 32px 100px;
  /* MEDIA QUERIES DESKTOP FIRST */
  @media (min-width: 320px) and (max-width: 480px) {
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

    .heroleft p {
      /* font-family: "pp-telegraf", sans-serif; */
      font-family: "Roboto", sans-serif;
      font-size: 25px;
      line-height: 83px;
      font-weight: 200;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    /* .heroright {
      width: 100% !important;
    } */
    .image-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
      font-size: 25px;
      line-height: 83px;
      font-weight: 200;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    /* .heroright {
      width: 100% !important;
    } */
    .image-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  text-decoration: none;
  color: black;
  .heroleft {
    width: 50%;

    .hero-smalltext {
      margin-top: 40px;
      font-size: 25px;
      text-decoration: underline;
    }
  }
  .heroright {
    width: 50%;
  }
`;

export const Heroheading = styled.div`
  p {
    /* font-family: "pp-telegraf", sans-serif; */
    font-family: "Roboto", sans-serif;
    font-size: 60px;
    line-height: 95px;
    font-weight: 200;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const SmallFooter = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 135px;
  background-color: #232323;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
  }
`;

export const LastFooter = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  line-height: 13px;
  letter-spacing: 4px;
  text-decoration: none;
`;
