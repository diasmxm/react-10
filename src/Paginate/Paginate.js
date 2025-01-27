import "./Paginate.sass";

function Paginate(props) {
  function handleClick(index, e) {
    props.handleClick(index);
  }
  const paginateButtons = [];
  for (let i = 1; i < props.number; i++) {
    if (props.selectNumber == i) {
      paginateButtons.push(<button className="bg-primary"> {i}</button>);
    } else {
      paginateButtons.push(
        <button onClick={() => handleClick(i)}> {i}</button>
      );
    }
  }
  return <div className="paginate_wrap"> {paginateButtons}</div>;
}

export default Paginate;
