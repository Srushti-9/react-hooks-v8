import { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  //useLayoutEffect hook is used to perform side effects after the DOM has been updated but before the browser paints the screen.
  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0); // "force update"
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
