const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={placeholder}
    />
  );
};

export default TextInput;