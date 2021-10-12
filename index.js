export const findWithinDelimiter = ({
  delimiter,
  content,
  caseInsensitive,
}) => {
  const flags = caseInsensitive ? "gi" : "g";

  const regex = new RegExp(
    "([^" +
      delimiter +
      "]+(?=" +
      delimiter +
      "[^" +
      delimiter +
      "]*(\r?\n|$)))",
    flags
  );

  return content.match(regex);
};
