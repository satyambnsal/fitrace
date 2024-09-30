import CircularProgress from "./CircularProgress";

export const YourSteps = () => {
  return (
    <div className="bg-[#121212] rounded-xl py-3 px-6">
      <div className="flex items-center justify-center gap-[30px]">
        <div className="flex-[0.3] flex justify-end">
          <div className="">
            <h3 className="mb-4">Your Steps</h3>
            <CircularProgress value={75} />
          </div>
        </div>
        <div className="flex-[0.7]">
          <h4 className="font-bold">29,986 / 50000 steps</h4>
          <p className="text-sm">Good job ! Keep walking to win the reward!</p>
        </div>
      </div>
    </div>
  );
};
