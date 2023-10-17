// this is a react element which returns an object not the h1 tag
//createElement lets you create a React element. It serves as an alternative to writing JSX.
const parent = React.createElement(
  "div",
  { id: "parent" }, //used to provide the attribute to h1 element
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "h1_heading" }, "This is h1 heading"),
      React.createElement("h2", { id: "h2_heading" }, "This is h2 heading"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "h1_heading" }, "This is h1 heading"),
      React.createElement("h2", { id: "h2_heading" }, "This is h2 heading"),
    ]),
  ]
);

//createRoot lets you create a root to display React components inside a browser DOM node.
const root = ReactDOM.createRoot(document.getElementById("root"));

// this render function will create the h1 tag from that react Element obj and add to the root

root.render(parent);
