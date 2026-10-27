function Student(props) {
  return <h3>My name is {props.name}</h3>;
}

function Props() {
  return (
    <div>
      <h2>Props Example</h2>
      <Student name="Gitanjali" />
    </div>
  );
}

export default Props;
