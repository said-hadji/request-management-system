export default function LoanFormField({ field, value, onChange, error, inputStyle }) {
  return (
    <div className="flex-1">
      <div className="relative">
        <input
          onChange={onChange}
          value={value}
          name={field.name}
          type={field.type}
          placeholder=""
          className={inputStyle}
        />
        <span className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none text-gray-600 peer-focus:top-4 peer-focus:text-sm peer-focus:text-gray-400 peer-not-placeholder-shown:top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 duration-150">
          {field.label}
        </span>
      </div>

      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
