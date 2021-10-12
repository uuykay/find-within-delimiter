import { findWithinDelimiter } from "./index.mjs";

const content =
  "Hello @this is@ some content separated by \r\n@some@ delimiters";

const matches = findWithinDelimiter({ delimiter: "@", content });

console.log(matches);

const matches2 = findWithinDelimiter({ delimiter: "#", content });

console.log(matches2);
