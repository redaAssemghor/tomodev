type MobileCardProps = {
  children: React.ReactNode;
};

const MobileCard = ({ children }: MobileCardProps) => {
  return (
    <div
      className="relative flex justify-center h-full w-[600px] border-4 border-black rounded-2xl bg-white"
      style={{ boxShadow: "5px 5px 2.5px 6px rgb(209, 218, 218)" }}
    >
      <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl" />

      <div className="absolute top-3 bottom-12 left-2 right-2 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden z-10">
        {children}
      </div>

      <span className="absolute -right-2 top-14  border-4 border-black h-7 rounded-md" />
      <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md" />
    </div>
  );
};

export default MobileCard;
