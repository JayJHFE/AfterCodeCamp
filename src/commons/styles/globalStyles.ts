import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Roboto-400";
    src: url("/fonts/Roboto-Regular.ttf");
  }
  @font-face {
    font-family: "Roboto-500";
    src: url("/fonts/Roboto-Medium.ttf");
  }
  @font-face {
    font-family: "Roboto-700";
    src: url("/fonts/Roboto-Bold.ttf");
  }
  @font-face {
    font-family: "NotoSansKR-400";
    src: url("/fonts/NotoSansKR-Regular.otf");
  }
  @font-face {
    font-family: "NotoSansKR-500";
    src: url("/fonts/NotoSansKR-Medium.otf");
  }
  @font-face {
    font-family: "NotoSansKR-800";
    scr: url("/fonts/NotoSansKR-Black.otf");
  }
`;
