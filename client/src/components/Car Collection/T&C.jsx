import React from "react";

const TC = () => {
  return (
    <div>
      <ul style={{ listStyleType: "disc", marginLeft: "1rem" }}>
        <li style={{ color: "black", fontSize: "0.875rem" }}>
          Your trip has a KM limit. If your usage exceeds this limit, you will
          be charged for the excess KM used.
        </li>
        <li style={{ color: "black", fontSize: "0.875rem" }}>
          Your trip includes one pick-up in the pick-up city and one drop to
          the destination city. It does not include within-city travel.
        </li>
        <li style={{ color: "black", fontSize: "0.875rem" }}>
          If your trip includes hill climbs, the cab AC may be switched off
          during such climbs.
        </li>
      </ul>
    </div>
  );
};

export default TC;
