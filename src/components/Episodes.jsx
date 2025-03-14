import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
      <div
          id="episodes"
          ref={itemRef}
          className={className}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: transformStyle }}
      >
        {children}
      </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, listenNowLink }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
      <div className="relative size-full">
        <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
                <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
          </div>

          {isComingSoon && (
              <a
                  href={listenNowLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={hoverButtonRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
              >
                {/* Radial gradient hover effect */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                      opacity: hoverOpacity,
                      background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #369b5a, #00000026)`,
                    }}
                />
                <TiLocationArrow className="relative z-20" />
                <p className="relative z-20">Listen now</p>
              </a>
          )}
        </div>
      </div>
  );
};

const Episodes = () => (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Episodes: The Journey Unfolds
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Tune in for immersive conversations that illuminate the mysteries of existence, consciousness, and the cosmos.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
              src="videos/feature-1.mp4"
              title={
                <>
                  Art, Life <b>and </b>everything in between
                </>
              }
              description="Join Joseph Al- Ahmad —actor, filmmaker, and entrepreneur in Bulgaria—as he dives into art, life, and everything in between, revealing untold stories and creative passions."
              isComingSoon
              listenNowLink="https://open.spotify.com/episode/6U5i3v9D2GksGHwE1QinFo?si=5d1vOH5RR1uiBUR8jyTK5A"
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
                src="videos/feature-2.mp4"
                title={
                  <>
                    Search <b>for</b> Extraterrestrial Intelligence
                  </>
                }
                description="Explore the cosmos with Anastasia Iliadou on SETI, where astrophysics meets experimental science to unveil the origins of planets and water in the universe."
                isComingSoon
                listenNowLink="https://open.spotify.com/episode/7FC9GOTNt6tzCCZs896IEy?si=h77DxDLnSza-OsQbVKjxaQ"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
                src="videos/feature-3.mp4"
                title={
                  <>
                    Mo<b>nst</b>ers
                  </>
                }
                description="Explore monsters and their meanings with Natalie Lawrence, an author, illustrator, and historian of science."
                isComingSoon
                listenNowLink="https://open.spotify.com/episode/4JCWWVf4TmlgcbHA8F6gb5?si=HLWDnMg3RXqNO0EvnUI8sQ"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
                src="videos/feature-4.mp4"
                title={
                  <>
                    Making <b>Space</b> accessible
                  </>
                }
                description="Join us as we look at making space accessible for everyone."
                isComingSoon
                listenNowLink="https://open.spotify.com/episode/3MU1mWZve5ovuSU4IbPOyK?si=I2nU_svRQhWcaLJqAwCbkA"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
                src="videos/feature-5.mp4"
                title={
                  <>
                    Firs<b>t Co</b>ntact
                  </>
                }
                description="Explore first contact and extraterrestrial intelligence with Benjamin L Fields, an astronomer."
                isComingSoon
                listenNowLink="https://open.spotify.com/episode/5xXUbci6z7Hy1xVqds9IQ5?si=20zrnRHmRHKgp-sd91KfJQ"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-green-800 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
);

export default Episodes;
