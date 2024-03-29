import "./switch.css";

const Switch = () => {
  return (
    <div className="switch">
      <label>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
