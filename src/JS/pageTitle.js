import { useEffect } from "react";

const pageTitle = (title) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title]);
};

export default pageTitle;
