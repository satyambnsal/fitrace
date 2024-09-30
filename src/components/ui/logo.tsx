type LogoProps = {
  size?: string;
};

export const Logo = ({ size }: LogoProps) => {
  return (
    <h1
      className={`font-viga text-left mt-0 ${
        size === "lg" ? "text-4xl" : "text-2xl"
      } `}
    >
      Fit
      <span className="text-[#FF5A5A]">Race</span>
    </h1>
  );
};
