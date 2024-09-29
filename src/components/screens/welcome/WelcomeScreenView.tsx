import backgroundImg from "@/assets/splash.png";
import { Button } from "@/components/ui/button";
// import { TrackingPermissionModal } from "@/components/modals/TrackingPermissionModal";
import { Logo } from "@/components/ui/logo";
import { FEATURE_LIST_DATA } from "@/constants";

type WelcomeScreenProps = {
  navigateToDashboard: () => void;
};

export const WelcomeScreenView = ({
  navigateToDashboard,
}: WelcomeScreenProps) => {
  return (
    <>
      <div
        className="flex justify-between flex-col text-white bg-cover bg-center relative text-left pt-7 min-h-screen px-6 pb-8"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="z-10 pt-5">
          <Logo />
        </div>

        <div
          className="z-10 pt-10 flex flex-col animate-[fadeInUp_1s_ease-out_0.5s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <h2 className="text-4xl mt-0 mb-6 font-bold">
            WELCOME <br /> NAME,
          </h2>
        </div>

        <div
          className="z-10 mt-auto animate-[fadeInUp_1s_ease-out_1s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <ul className="flex flex-col gap-4">
            <li>We're excited to have you on board !</li>
            <li>
              At Fitrace, we believe in making fitness fun, rewarding, and
              social!
            </li>
          </ul>
        </div>

        <div className="z-10 mt-8">
          <ul className="flex flex-col gap-4">
            {FEATURE_LIST_DATA.map((feature, index) => {
              return (
                <li
                  key={feature.name}
                  className="flex items-center gap-6 animate-[fadeInLeft_0.5s_ease-out] opacity-0"
                  style={{
                    animationDelay: `${1.5 + index * 0.3}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div>
                    <img src={feature.logoUrl} alt={feature.logoAlt} />
                  </div>
                  <div>
                    <h3 className="m-0 text-base font-bold">{feature.name}</h3>
                    <p className="text-sm max-w-[244px]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="z-10 mt-8 animate-[fadeInUp_1s_ease-out] opacity-0"
          style={{
            animationDelay: `${2.5 + FEATURE_LIST_DATA.length * 0.3}s`,
            animationFillMode: "forwards",
          }}
        >
          <Button className="w-full" size="lg" onClick={navigateToDashboard}>
            LET'S GO !
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none min-h-screen text-white bg-black/75"></div>
    </>
  );
};
