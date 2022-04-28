import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={230}
    height={100}
    viewBox="0 0 253 100"
    backgroundColor="#ededed"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="13" y="52" rx="3" ry="3" width="112" height="6" />
    <rect x="13" y="73" rx="3" ry="3" width="52" height="6" />
    <rect x="204" y="30" rx="3" ry="3" width="38" height="6" />
    <rect x="183" y="73" rx="3" ry="3" width="60" height="6" />
    <rect x="13" y="31" rx="3" ry="3" width="135" height="6" />
  </ContentLoader>
);

export default MyLoader;
