import { useState } from "react";

function useCalculator() {
  const [fields, setFields] = useState({
    from: "",
    to: "",
    size: "",
  });

  const handleChange = ({ key, value }) => {
    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { fields, handleChange };
}

export default useCalculator;
