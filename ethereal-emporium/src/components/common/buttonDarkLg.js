const ButtonDarkLg = ({ icon, label }) => {
  return (
    <button className="text-lg font-bold flex items-center gap-2 px-12 py-4 ring-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-700">
      {icon}
      {label}
    </button>
  );
};

export default ButtonDarkLg;
