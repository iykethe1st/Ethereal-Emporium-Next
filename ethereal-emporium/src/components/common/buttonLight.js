const ButtonLight = ({ icon, label }) => {
  return (
    <button className=" flex items-center gap-2 px-2 py-1 ring-1 ring-green-600 rounded-full bg-gradient-to-r hover:from-green-800 hover:to-slate-600 active:from-green-900 active:to-slate-700">
      {icon}
      {label}
    </button>
  );
};

export default ButtonLight;
