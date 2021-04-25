const fixtures = {
  missing_lang: {
    label: "Missing lang attribute",
    source: `<!DOCTYPE HTML>
<html>
    <head>
        <title>{{ self.title }}</title>
    </head>
    <body>
        <h1>{{ self.title }}</h1>
    </body>
</html>`,
    output: [
      {
        column: 1,
        line: 2,
        code: "html_has_lang",
        message:
          "The `<html>` tag should have a `lang` attribute with a valid value, describing the main language of the page",
      },
    ],
  },
};

export default fixtures;
