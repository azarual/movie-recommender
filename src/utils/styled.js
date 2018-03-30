import { show_details } from "../constants/strings";
import { keyframes } from "styled-components";
/**
 * utils that exist (mostly) to extend certain component styles.
 */
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const styledMovie = {
  moviePosterWithDetails: withDetails => {
    if (withDetails === show_details) {
      return `
        // animation: ${rotate360} 2s linear infinite;
      `;
    }
  }
};
