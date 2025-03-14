import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={`relative overflow-hidden rounded-lg ${clipClass}`}>
      <img src={src} className="w-full h-auto object-cover" alt="contact" />
  </div>
);

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:podcastwaw@gmail.com";
  };

  return (
      <div id="contact" className="my-20 min-h-96 w-screen px-6 md:px-10">
        <div className="relative rounded-lg bg-black py-16 text-blue-50 sm:overflow-hidden">
          {/* Left Image (Hidden on small screens) */}
          <div className="absolute -left-10 top-0 hidden h-full w-48 sm:block md:block lg:left-20 lg:w-80">
          <ImageClipBox
              src="/img/contact-2.jpg"
              clipClass="translate-y-40 md:translate-y-60"
          />
        </div>

          <div className="absolute -top-32 left-10 w-40 sm:top-1/2 sm:left-auto sm:right-10 hidden md:block lg:top-20 lg:w-72">
          <ImageClipBox
            src="/img/contact-3.jpg"
            clipClass="scale-100 sm:scale-110 md:scale-125"
          />

        </div>

          <div className="relative flex flex-col items-center text-center px-4 sm:px-10">
            <p className="mb-6 text-xs uppercase tracking-widest text-gray-300">
            Contact us
          </p>

          <AnimatedTitle
            title="let&#39;s un<b>l</b>ock the <br /> mysteries of <br /> exis<b>ta</b>nce t<b>o</b>gether."
            className="special-font text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          />

            <Button
                title="Email Us"
                containerClass="mt-8"
                onClick={handleEmailClick}
            />
        </div>
      </div>
    </div>
  );
};

export default Contact;
