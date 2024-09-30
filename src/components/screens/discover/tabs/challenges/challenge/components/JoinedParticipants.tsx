import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  JOINED_PARTICIPANTS,
  SAMPLE_PROFILE_URL,
  TABS_TRIGGER_CLASSESV1,
} from "@/constants";

export const JoinedParticipants = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Joined Participants</h2>
      <div className="bg-gradient-to-b from-[#262626] to-[#191919] rounded-xl p-4">
        <Tabs defaultValue="everyone">
          <TabsList className="flex items-center gap-3">
            <TabsTrigger value="everyone" className={TABS_TRIGGER_CLASSESV1}>
              Everyone
            </TabsTrigger>
            <TabsTrigger value="friends" className={TABS_TRIGGER_CLASSESV1}>
              Your Friends
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="everyone">
              <ul className="flex flex-col gap-3">
                {JOINED_PARTICIPANTS.length <= 0 ? (
                  <h3 className="text-xl font-bold">
                    Oops no one has joined the challenge . Invite your friends
                    !!
                  </h3>
                ) : (
                  <>
                    {JOINED_PARTICIPANTS.map((participant) => {
                      return (
                        <li
                          className="flex items-center gap-3 bg-[#d9d9d908] ps-3 pr-5 py-2 rounded-xl"
                          key={participant.rank}
                        >
                          <div className="w-[27px] h-[27px] rounded-full">
                            <img
                              src={participant.profileUrl}
                              alt="profile"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <p className="font-bold">{participant.name}</p>

                          <div className="text-right ms-auto">
                            <p className="font-bold leading-tight">
                              {participant.steps}
                            </p>
                            <p className="text-[10px] leading-tight">steps</p>
                          </div>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            </TabsContent>
            <TabsContent value="friends">
              <ul className="flex flex-col gap-3">
                {JOINED_PARTICIPANTS.length <= 0 ? (
                  <h3 className="text-xl font-bold">
                    Oops none of your friends has joined the challenge . Invite
                    them !!
                  </h3>
                ) : (
                  <>
                    {JOINED_PARTICIPANTS.map((participant) => {
                      return (
                        <li
                          className="flex items-center gap-3 bg-[#d9d9d908] ps-3 pr-5 py-2 rounded-xl"
                          key={participant.rank}
                        >
                          <div className="w-[27px] h-[27px] rounded-full">
                            <img
                              src={participant.profileUrl}
                              alt="profile"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>

                          <p className="font-bold">{participant.name}</p>

                          <div className="text-right ms-auto">
                            <p className="font-bold leading-tight">
                              {participant.steps}
                            </p>
                            <p className="text-[10px] leading-tight">steps</p>
                          </div>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <Button className="w-full" size="lg">
        Join
      </Button>
    </div>
  );
};
