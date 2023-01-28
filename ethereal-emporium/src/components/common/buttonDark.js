const ButtonDark = ({ icon, label }) => {
  return (
    <button className=" flex items-center gap-2 px-2 py-1 ring-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-700">
      {icon}
      {label}
    </button>
  );
};

export default ButtonDark;
