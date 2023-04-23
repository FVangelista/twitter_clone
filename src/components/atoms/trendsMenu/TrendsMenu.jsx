import contentList from '../../../mocks/contentList';
import SideTrends from '../sideTrends';
import './index.css';

const TrendsMenu = () => {
  return (
    <div className="TrendsMenu">
      <h3>trends for you</h3>
      {contentList.map((content) => (
        <SideTrends data={content} key={content.id} />
      ))}
    </div>
  );
};

export default TrendsMenu;
