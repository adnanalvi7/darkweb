import PropTypes from "prop-types";
import Image from "next/image";
import CountUp from "react-countup";

const Loading = ({ onEnd }) => {
  return (
    <div className="loading">
      <Image
        className="loading__skull"
        src="/skull.gif"
        alt="GoDark Icon"
        width={148}
        height={148}
      />
      <div className="loading__footer">
        <div className="loading__footer-line" />
        <span className="loading__footer-percent">
          <CountUp
            end={100}
            duration={5}
            decimals={5}
            useEasing={false}
            onEnd={onEnd}
          />
        </span>
      </div>
    </div>
  );
};

Loading.propTypes = {
  onEnd: PropTypes.func,
};

export default Loading;
