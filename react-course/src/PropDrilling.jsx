function Student(props) {
  return <h3>My name is {props.name}</h3>;
}

function Classroom(props) {
  return <Student name={props.name} />;
}

function PropDrilling() {
  const name = "Gitanjali";

  return (
    <div>
      <h2>Prop Drilling Example</h2>
      <Classroom name={name} />
    </div>
  );
}

export default PropDrilling;
