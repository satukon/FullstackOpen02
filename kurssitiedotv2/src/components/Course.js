const Course = (props) => {

    const {course} = props;
    const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <b>Total of excercieses: {total}</b>
      </div>
    );
  };
  
  const Header = (props) => {
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    )
  }
  
  const Content = (props) => {
    const {parts} = props;
  
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };
  
  const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    );
  };

  export default Course