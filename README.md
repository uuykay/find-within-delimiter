# Find within delimiter

This is a utility to be able to find words between delimiters that you define. I created this as an alternative to delimiter-finder which I found could not find words between delimiters that were on new lines. My use case was in reading Markdown files, and replacing some delimiters I had created for myself.

Benefits of this package:

- ✔️ No dependencies
- ✔️ Efficient (no unnecessary class being created for usage).
- ✔️ Supports finding words between delimiters on new lines (\r\n).
- ✔️ Supports case sensitive (default) or case insensitive delimiter matches.

## Usage

When matches are found, they are returned as a array of the matched strings.

```js
const content =
  "Hello @this is@ some content separated by \r\n@some@ delimiters";

const matches = findWithinDelimiter({ delimiter: "@", content });

console.log(matches);
// [ 'this is', 'some' ]
```

When no matches are found, null is returned

```js
const content =
  "Hello @this is@ some content separated by \r\n@some@ delimiters";

const matches2 = findWithinDelimiter({ delimiter: "#", content });

console.log(matches2);
// null
```
