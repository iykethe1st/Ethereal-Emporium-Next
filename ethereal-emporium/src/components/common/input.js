const Input = ({ name, onChange, placeholder, type, errors }) => {
  return (
    <>
      <input
        className="p-2 w-[15rem] md:w-[20rem] focus:outline-none bg-inherit border-b border-slate-300"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {errors && (
        <div className="ml-2 md:w-[17rem] w-11/12 text-start text-[0.7rem] md:text-[0.8rem] text-red-600">
          {errors}
        </div>
      )}{" "}
    </>
  );
};

export default Input;
