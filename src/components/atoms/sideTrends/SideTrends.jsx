import './index.css';

const SideTrends = ({ data }) => {
  return (
    <div className="SideTrends">
      <span>{'#' + data.user.username}</span>
      <p>{data.body}</p>
    </div>
  );
};

export default SideTrends;
