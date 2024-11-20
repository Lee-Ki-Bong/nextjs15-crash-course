import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="text-3xl">Dashboard layout</div>
      {children}
    </div>
  );
};

export default layout;
