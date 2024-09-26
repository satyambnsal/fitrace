import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LEADERBOARD_PLAYERS, SAMPLE_PROFILE_URL } from "@/constants";

export const LeaderboardView = () => {
  return (
    <div className="text-left mt-4">
      <div>
        <h2 className="mb-3">Top Players</h2>
        <div className="flex items-center gap-3">
          <Button className="rounded-[12px] min-h-[46px] w-full">STEPS</Button>
          <Button
            className="rounded-[12px] min-h-[46px] w-full text-primary"
            variant="outline"
          >
            FRT TOKEN
          </Button>
        </div>
        <div className="flex gap-2 text-center mt-6">
          <div className="pt-8">
            <div className="p-[6px] bg-gradient-to-b from-[#343434] to-[#CB3C1D] rounded-full w-[108px] h-[108px] relative">
              <div className="w-full h-full rounded-full">
                <img
                  src={SAMPLE_PROFILE_URL}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-full text-xs flex items-center justify-center bg-[#C83D1E] absolute top-0 right-0">
                2
              </div>
            </div>
            <h3 className="text-sm mt-2">Jordan Winters</h3>
            <p className="text-[10px]">14,890 steps</p>
          </div>

          <div>
            <div className="p-[6px] bg-gradient-to-b from-[#343434] to-[#FFD700] rounded-full w-[132px] h-[132px] relative">
              <div className="w-full h-full rounded-full">
                <img
                  src={SAMPLE_PROFILE_URL}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#FFD700] absolute top-0 right-0">
                1
              </div>
            </div>
            <h3 className="text-sm mt-2">Jordan Winters</h3>
            <p className="text-[10px]">14,890 steps</p>
          </div>

          <div className="pt-8">
            <div className="p-[6px] bg-gradient-to-b from-[#343434] to-[#CD7F32] rounded-full w-[108px] h-[108px] relative">
              <div className="w-full h-full rounded-full">
                <img
                  src={SAMPLE_PROFILE_URL}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-full text-xs flex items-center justify-center bg-[#CD7F32] absolute top-0 right-0">
                3
              </div>
            </div>
            <h3 className="text-sm mt-2">Jordan Winters</h3>
            <p className="text-[10px]">14,890 steps</p>
          </div>
        </div>
      </div>

      <div className="bg-[#100C0C] rounded-t-xl mt-4 max-h-[calc(100svh-480px)] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[65px] text-white text-xs text-center">
                S.N
              </TableHead>
              <TableHead className="text-white text-xs">Player</TableHead>
              <TableHead className="text-white text-xs">Steps</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {LEADERBOARD_PLAYERS.map((player) => {
              return (
                <TableRow key={player.rank}>
                  <TableCell className="font-medium w-0 text-center">
                    {player.rank}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-[18px] h-[18px] rounded-full border border-[#C587EB]">
                        <img
                          src={player.profileUrl}
                          alt="profile"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {player.name}
                    </div>
                  </TableCell>
                  <TableCell className="">{player.steps}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
