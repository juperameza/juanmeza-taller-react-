const Content = ({ courseInfo }) => {
  return (
    <div>
      {courseInfo.map((info) => (
        <p key={`${info.part}`}>
          {info.part} {info.exercises}
        </p>
      ))}
    </div>
  );
};
export default Content;
