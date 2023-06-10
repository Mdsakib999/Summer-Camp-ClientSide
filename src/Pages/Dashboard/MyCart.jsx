import React, { useState } from 'react';

const MyCart = () => {

    const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

    return (
        <div>
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