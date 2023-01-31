const ButtonLightLg = ({ icon, label }) => {
  return (
    <button className="text-lg font-bold  flex items-center gap-2 px-12 py-3 ring-2 ring-green-600 rounded-full bg-gradient-to-r hover:from-green-800 hover:to-slate-600 active:from-green-900 active:to-slate-700">
      {icon}
      {label}
    </button>
  );
};

export default ButtonLightLg;
