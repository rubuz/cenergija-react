const ClockNumbers = ({ isAM }: { isAM: boolean }) => {
  let numbers: number[] = [];
  if (isAM) {
    numbers = [6, 7, 0];
  } else {
    numbers = [14, 16, 20, 22, 12];
  }
  const radius = 50;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex aspect-square w-full justify-center rounded-full bg-transparent">
        {numbers.map((number) => {
          const angle = (number / 12) * 2 * Math.PI;
          const x = 50 + radius * Math.cos(angle - Math.PI / 2);
          const y = 50 + radius * Math.sin(angle - Math.PI / 2);

          return (
            <label
              key={number}
              className="absolute text-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <span className="text-lg font-extrabold text-black md:text-2xl lg:text-3xl">
                {number}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ClockNumbers;
