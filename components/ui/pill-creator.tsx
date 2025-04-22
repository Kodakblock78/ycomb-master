type PillsProps = {
    items: string[];
  };
  
  const Pills: React.FC<PillsProps> = ({ items }) => {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {items.map((item, index) => (
          <p
            key={index}
            className="yc-tw-Pill rounded-sm bg-[#E6E4DC] uppercase tracking-widest px-3 py-[3px] text-[12px] font-thin"
          >
            {item}
          </p>
        ))}
      </div>
    );
  };
  