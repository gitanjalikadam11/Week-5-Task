function ApplyingCssStyles() {
  const headingStyle = {
    color: "blue",
    backgroundColor: "lightyellow",
    padding: "10px",
    borderRadius: "8px"
  };

  return (
    <div className="chapter">
      <h2 style={headingStyle}>
        Applying CSS Styles in React
      </h2>

      <p className="message">
        This paragraph uses an external CSS class.
      </p>

      <button className="my-button">
        Click Me
      </button>
    </div>
  );
}

export default ApplyingCssStyles;
