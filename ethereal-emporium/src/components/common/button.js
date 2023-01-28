const Button = ({ icon, label }) => {
  return (
    <button className=" flex items-center gap-2 px-4 py-1 ring-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500">
      {icon}
      {label}
    </button>
  );
};

export default Button;
