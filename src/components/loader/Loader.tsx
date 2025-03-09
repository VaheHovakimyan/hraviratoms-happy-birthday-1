import "./Loader.scss";

const Loader = ({ size = 50, color = "#3498db", message = "" }) => {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <div
          className="spinner"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: `${color} transparent transparent transparent`,
          }}
        ></div>
        {message && <p className="loader-message">{message}</p>}
      </div>
    </div>
  );
};

export default Loader;
