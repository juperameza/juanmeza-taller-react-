const Total = ({ courseInfo }) => {
  let total = 0;
  courseInfo.map((info) => {
    total += info.exercises;
  });
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

export default Total;
