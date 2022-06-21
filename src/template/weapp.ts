module.exports = {
  js: `Component({
  properties: {
    // #names#
    name: {
      type: String,
    },
    size: {
      type: Number,
      value: #size#,
    },
  },
  data: {
    quote: '"',
  }
});`,

  wxss: `.icon {
  background-repeat: no-repeat;
}`,

  json: `{
  "component": true,
  "usingComponents": {}
}`,
};
