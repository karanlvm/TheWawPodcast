import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
      <div className="min-h-screen w-screen bg-black text-blue-50 flex flex-col items-center py-10">
        <p className="text-sm uppercase tracking-widest md:text-xs">The Hosts</p>

        <AnimatedTitle
            title="Hari &<b> SA</b>I <br />"
            containerClass="mt-5 mix-blend-difference text-center"
        />

        {/* Image Container */}
        <div className="relative w-full max-w-lg p-4 md:max-w-2xl">
          <div
              className="relative overflow-hidden rounded-xl shadow-lg"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
          >
            <img
                ref={frameRef}
                src="/img/hosts.webp"
                alt="hosts"
                className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Description and Buttons */}
        <div className="flex flex-col items-center mt-8 text-center md:w-3/4 md:text-left">
          <p className="max-w-xl font-light text-violet-50">
            Where dimensions of thought converge, Sai and Hari unlock cosmic
            mysteries—revealing secrets that illuminate existence and kindle
            infinite wonder.
          </p>

          <div className="mt-5 flex flex-col gap-4 md:flex-row">
            <Button
                id="realm-btn"
                title="Follow Our Instagram"
                onClick={() =>
                    window.open("https://www.instagram.com/thewawpodcast", "_blank")
                }
            />
            <Button
                id="realm-btn"
                title="About Hari"
                onClick={() =>
                    window.open("https://www.sagisreeharivarma.com/", "_blank")
                }
            />
            <Button
                id="realm-btn"
                title="About Sai"
                onClick={() =>
                    window.open(
                        "https://skrishnamj.github.io/Portfolio2025/",
                        "_blank"
                    )
                }
            />
          </div>
        </div>
      </div>
  );
};

export default FloatingImage;