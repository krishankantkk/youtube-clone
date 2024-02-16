import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VedioCard = ({ props }) => {
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(themeFromStore ? "white" : "black");

  useEffect(() => {
    if (themeFromStore) {
      setThemeState("black");
    } else {
      setThemeState("white");
    }
  }, [themeFromStore]);
  const { snippet, statistics } = props;
  const givenTimestamp = new Date(snippet.publishedAt).getTime();
  const currentTimestamp = new Date().getTime();
  const timeDifferenceMs = currentTimestamp - givenTimestamp;
  const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60)) % 24;
  return (
    <div>
      <div className="mt-3 w-72 h-90 shadow-xl rounded-xl ">
        <div>
          <img
            className="w-72 h-64 rounded-xl opacity-100 hover:opacity-70 "
            src={snippet.thumbnails.high.url}
            alt="thumbnail"
          />
        </div>

        <div>
          <div>
            <h2 className={`font-semibold text-${theme}`}>{snippet.title}</h2>
            <p className={`font-bold text-${theme}`}>{snippet.channelTitle}</p>
            {statistics ? (
              <p className="grey">
                {hours}hr ago <span>{statistics.viewCount} views</span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioCard;
