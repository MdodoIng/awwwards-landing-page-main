import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Magnetic from "@/components/common/Magnetic";

const index = ({ children, backgroundColor = "#455CE9", ...attributes }) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", window: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        style={{
          overflow: "hidden",
          padding: "15px 60px 15px 60px"
        }}
        className="rounded-full border border-[rgb(135,135,135)] cursor-pointer relative flex items-center justify-center group"
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        <div className="relative z-[1] duration-[.4s] group-hover:text-white shrink-0">
          {children}
        </div>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="w-full h-[150%] absolute rounded-full top-full"
        />
      </div>
    </Magnetic>
  );
};

export default index;
