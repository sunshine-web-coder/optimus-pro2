export default function InputField({
  label,
  type = 'text',
  placeholder = '',
  icon: Icon = null,
  value,
  onChange,
  error,
  name,
  className = '',
  iconClassName = '' // New prop for icon customization
}) {
  return (
    <div className="relative flex flex-col gap-1">
      {label && <label className="block text-gray-700 !text-base sub-heading">{label}</label>}
      {Icon && (
        <Icon
          className={`w-[18px] h-[18px] text-gray-700 absolute top-[38px] left-[10px] ${iconClassName}`} // Merge custom icon styles
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`w-full !text-base sub-heading pl-10 px-3 py-2 border bg-[#dadada] text-gray-700 rounded-full focus:outline-none focus:ring focus:border-blue-300 ${
          error ? 'border-red-500 ring-red-200' : ''
        } ${className}`} // Merge custom input styles
        style={{ paddingLeft: Icon ? '3rem' : '0.75rem' }}
      />
      {error && <span className="text-red-500 text-sm mt-1 ml-3">{error}</span>}
    </div>
  );
}
