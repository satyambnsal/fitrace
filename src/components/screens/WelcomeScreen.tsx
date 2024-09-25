import { IonContent, IonPage } from "@ionic/react";
import backgroundImg from "../../assets/splash.png";
import trophyPath from "../../assets/trophy.svg";
import sneakerWhitePath from "../../assets/sneakerWhite.svg";
import compassWhitePath from "../../assets/compassWhite.svg";
import { Button } from "../ui/button";
import { TrackingPermissionModal } from "../modals/TrackingPermissionModal";

export const WelcomeScreen = () => {
  return (
    <IonPage>
      <IonContent>
        <div
          className="min-h-full flex justify-between flex-col text-white bg-cover bg-center relative text-left"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="z-10 min-h-screen flex flex-col px-6 pb-8">
            <div className="pt-5 ">
              <h1 className="font-viga text-left mt-0">FitRace</h1>
            </div>

            <div className="pt-10 flex flex-col">
              <h2 className="text-4xl mt-0 mb-6 font-bold">
                WELCOME <br /> NAME,
              </h2>
            </div>

            <div className="mt-auto">
              <ul className="flex flex-col gap-4">
                <li>We're excited to have you on board !</li>
                <li>
                  At Fitrace, we believe in making fitness fun, rewarding, and
                  social!
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-6">
                  <div>
                    <img src={trophyPath} alt="trophy" />
                  </div>
                  <div>
                    <h3 className="m-0 text-base font-bold">CHALLENGES</h3>
                    <p className="text-sm max-w-[244px]">
                      Take on exciting challenges and compete with friends !
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-6">
                  <div>
                    <img src={sneakerWhitePath} alt="sneaker" />
                  </div>
                  <div>
                    <h3 className="m-0 text-base font-bold">EARN</h3>
                    <p className="text-sm max-w-[244px]">
                      Earn rewards through our Move to Earn system !
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-6">
                  <div>
                    <img src={compassWhitePath} alt="compass" />
                  </div>
                  <div>
                    <h3 className="m-0 text-base font-bold">SocialFi</h3>
                    <p className="text-sm max-w-[244px]">
                      Connect with others and stay motivated with our SocialFi
                      features !
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button className="w-full" size="lg">
                LET'S GO !
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none bg-black/75"></div>
        </div>
      </IonContent>
    </IonPage>
  );
};
