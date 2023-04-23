import "./index.css";
import { useState, useEffect } from "react";
import SingleContent from "../singleContent/SingleContent";

const ContentList = ({ setPutModalVisible, inputData }) => {
  const [dataContent, setDataContent] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setDataContent(data.posts);
      });
  }, []);

  useEffect(() => {
    const datafilter = dataContent.filter((item) =>
      item.body.includes(inputData)
    );
    setFilteredData(datafilter);
  }, [inputData]);

  return (
    <div className="ContentList">
      {filteredData &&
        filteredData.map((content) => (
          <SingleContent
            data={content}
            setPutModalVisible={setPutModalVisible}
            key={content.id}
          />
        ))}
      {filteredData < 1 &&
        dataContent.map((content) => (
          <SingleContent
            data={content}
            setPutModalVisible={setPutModalVisible}
            key={content.id}
          />
        ))}
    </div>
  );
};

export default ContentList;
