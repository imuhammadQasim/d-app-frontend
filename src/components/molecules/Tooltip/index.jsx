/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { TooltipContainer, TooltipBtn, StyledTooltip } from './Tooltip.styles';

function Tooltip({ delay, children, title, width, alignLeft, type }) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  });

  return (
    <TooltipContainer onMouseEnter={showTip} onMouseLeave={hideTip}>
      <TooltipBtn>{children}</TooltipBtn>
      {active && (
        <StyledTooltip place="top" type={type} width={width} ref={ref} height={height} alignLeft={alignLeft}>
          {title}
        </StyledTooltip>
      )}
    </TooltipContainer>
  );
}

export default Tooltip;
