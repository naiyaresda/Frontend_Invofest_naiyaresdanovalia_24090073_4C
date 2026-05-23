interface SpeakerCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center gap-4 group">
      
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-64 rounded-full border-[16px] border-gray-900 mx-auto group-hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>

      <div className="flex flex-col items-center border-4 border-gray-900 w-full p-4 rounded-lg relative py-10 shadow-xl group-hover:shadow-2xl transition-all duration-300">
        
        <div className="absolute inset-0 rounded-lg group-hover:bg-red-200 opacity-0 group-hover:opacity-40 transition-all"></div>

        <h3 className="text-xl text-gray-900 font-semibold z-10">{name}</h3>
        <p className="text-sm text-red-600 text-center z-10">{role}</p>
      </div>

    </div>
  );
};

export default SpeakerCard;