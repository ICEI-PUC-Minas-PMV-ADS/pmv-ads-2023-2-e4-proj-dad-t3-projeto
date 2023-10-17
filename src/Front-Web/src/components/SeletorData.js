import { useState, useEffect } from 'react';

export default function SeletorData(props) {
  const date = new Date();
  const [data, setData] = useState(
    `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`
  );

  useEffect(() => {
    props.getDate(data.split('-'));
  }, [data]);

  return (
    <input
      type="month"
      value={data}
      className="input-calendario"
      onChange={(e) => setData(e.target.value)}
      onFocus={(e) => e.target.blur()}
    />
  );
}
