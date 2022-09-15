import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="126" cy="126" r="126" />
    <rect x="16" y="273" rx="7" ry="7" width="241" height="29" />
    <rect x="18" y="311" rx="7" ry="7" width="240" height="69" />
    <rect x="111" y="389" rx="7" ry="7" width="145" height="27" />
    <rect x="20" y="389" rx="7" ry="7" width="78" height="27" />
  </ContentLoader>
);

export default Skeleton;
