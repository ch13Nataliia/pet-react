import React, { useState } from 'react';

function EventButtons() {
  const [value, setter] = useState(0);
  return (
    <div>
      <p style={{ color: 'blue', fontSize: '30px', border: `2px solid gray` }}>
        {value}
      </p>
      <button
        style={{ color: 'red', fontSize: '20px', border: `2px solid gray` }}
        onClick={() => setter(value + 1)}
      >
        add 1
      </button>
      <button
        style={{ color: 'red', fontSize: '20px', border: `2px solid gray` }}
        onClick={() => setter(value - 1)}
      >
        minus 1
      </button>
    </div>
  );
}

export default EventButtons;
