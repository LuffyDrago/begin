import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "pp-telegraf", sans-serif;
  padding: 120px 32px 100px;
  background-color: transparent;

  /* 
  MEDIA QUERIES DESKTOP FIRST */
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
  }

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-content: center;
    .heroleft {
      width: 100%;
    }
  }

  /* @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    p {
      /* font-family: "pp-telegraf", sans-serif; */
  /* font-family: "Roboto", sans-serif;
      font-size: 35px;
      line-height: 83px;
      font-weight: 200;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .heroleft {
      width: 50%;
      font-size: 35px;
    }
    .heroright {
      width: 50%;
    }
  }  */
`;

export const Heroheading = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    p {
      /* font-family: "pp-telegraf", sans-serif; */
      font-family: "Roboto", sans-serif;
      font-size: 35px;
      line-height: 83px;
      font-weight: 200;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .heroleft {
      width: 50%;
      font-size: 35px;
    }
    .heroright {
      width: 50%;
    }
  }
  p {
    /* font-family: "pp-telegraf", sans-serif; */
    font-family: "Roboto", sans-serif;
    font-size: 52px;
    line-height: 83px;
    font-weight: 200;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export const Herosection = styled.div`
  display: flex;
`;
