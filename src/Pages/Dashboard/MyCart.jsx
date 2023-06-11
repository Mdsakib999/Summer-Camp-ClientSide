import React, { useState } from 'react';

const MyCart = () => {

    const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

    return (
        <div>
          <h1>I ma open for all ( my cart compo )</h1>
      <button onClick={handleClick}>Click Me</button>
      <div
        style={{ opacity: isDisabled ? 0.5 : 1, pointerEvents: isDisabled ? 'none' : 'auto' }}
      >
        {/* Contents of the div */}
        <p>hi</p>
      </div>
    </div>
    );
};

export default MyCart;