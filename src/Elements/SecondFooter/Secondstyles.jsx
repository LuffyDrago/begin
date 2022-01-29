import styled from "styled-components";

export const SecondFooter = styled.div`
  color: white;
  padding: 120px 32px 100px;
  background-color: black;
  a {
    color: white;
    font-size: 35px;
    font-family: "Roboto", sans-serif;
    text-decoration: underline;
    margin-top: 1rem;
    transition: opacity 500ms ease;
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
    .image-icon {
      align-self: center !important;
    }
    .fourdots {
      display: none;
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
    .image-icon {
      align-self: center !important;
    }
    .fourdots {
      display: none;
    }
  }

  width: 90%;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  /* display: flex;
  flex-direction: column; */
  .heroright {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    .image-icon {
      align-self: flex-end;
    }
    .fourdots {
      align-self: flex-start;
    }
  }
`;

export const Heroheading = styled.div`
  p {
    /* font-family: "pp-telegraf", sans-serif; */
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 65px;
    line-height: 95px;
  }
`;
