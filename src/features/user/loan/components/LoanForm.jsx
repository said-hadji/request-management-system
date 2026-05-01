import { useEffect, useMemo, useState } from "react";
import LoanFormField from "./LoanFormField";

const LOAN_FORM_FIELDS = {
  PERSONAL_FIELDS: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      getError: (value, isSubmitted) =>
        !value && isSubmitted ? "Enter your first name" : null,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      getError: (value, isSubmitted) =>
        !value && isSubmitted ? "Enter your last name" : null,
    },
  ],
  ADDITIONAL_FIELDS: [
    {
      name: "email",
      label: "Email",
      type: "email",
      getError: (value, isSubmitted) => {
        if (!value && isSubmitted) return "Enter your email";
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Incorrect email format";
        return null;
      },
    },
    {
      name: "age",
      label: "Age",
      type: "text",
      getError: (value, isSubmitted) => {
        if (!value && isSubmitted) return "Enter your age";
        const age = Number(value);
        if (value && (age < 21 || age > 60)) return "Age is not allowed";
        return null;
      },
    },
  ],
};

const SALARY_MAP = {
  "Less than 1000$": 5000,
  "Between 1000$ and 5000$": 20000,
  "Greater than 5000$": 50000,
};

export default function LoanForm({ setIsSuccess, setRequests }) {
  useEffect(() => {
    if (!localStorage.getItem("requests")) {
      localStorage.setItem("requests", JSON.stringify([]));
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    isEmployee: false,
    salary: "",
    amount: 500,
    status: "pending",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [index, setIndex] = useState(0);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSalary = (option) => {
    setFormData((prev) => ({
      ...prev,
      salary: option ? option : "",
    }));
    setIndex(0);
  };

  const handleAmount = (index) => {
    setFormData((prev) => ({
      ...prev,
      amount: index,
    }));
  };

  const sanitizedAge = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      age: value.replace(/\D/g, ""),
    }));
  };

  function toggleIsSelected() {
    setIsSelected((prev) => !prev);
  }

  function generateSteps(max) {
    let arr = [];
    for (let i = 500; i <= max; i += 500) {
      arr.push(i);
    }
    return arr;
  }

  const steps = useMemo(() => {
    const max = SALARY_MAP[formData.salary];
    return max ? generateSteps(max) : [];
  }, [formData.salary]);

  const hasErrors = () => {
    const allFields = [
      ...LOAN_FORM_FIELDS.PERSONAL_FIELDS,
      ...LOAN_FORM_FIELDS.ADDITIONAL_FIELDS,
    ];

    return allFields.some((field) =>
      field.getError(formData[field.name], true),
    );
  };

  function handleSubmitSuccess() {
    if (hasErrors() || !formData.isEmployee || !formData.salary) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 1000);

    const newRequest = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...formData,
    };
    setRequests((prev) => {
      const updated = [...prev, newRequest];
      localStorage.setItem("requests", JSON.stringify(updated));
      return updated;
    });
  }

  const options = [
    { id: 1, option: "Less than 1000$" },
    { id: 2, option: "Between 1000$ and 5000$" },
    { id: 3, option: "Greater than 5000$" },
  ];

  const inputStyle =
    "peer w-full outline-none bg-gray-100 rounded-2xl px-4 py-6";

  return (
    <div
      onClick={() => {
        setIsSelected(false);
      }}
      className="flex-1 flex justify-center p-4"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
          handleSubmitSuccess();
        }}
        action=""
        className="w-full lg:w-xl flex flex-col justify-between gap-4"
      >
        <div className="flex flex-col items-center gap-14">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold">Request a Loan</h1>
            <p className="text-black/70 leading-8">
              Fill in your details and submit your loan application. We’ll
              evaluate your request based on basic eligibility rules.
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full lg:w-xl space-y-4">
              {/* Personal fields */}
              <div className="flex flex-col sm:flex-row gap-4">
                {LOAN_FORM_FIELDS?.PERSONAL_FIELDS?.map((field) => {
                  const name = field.name;
                  const error = field.getError(formData[name], isSubmitted);
                  return (
                    <LoanFormField
                      key={field.name}
                      field={field}
                      value={formData[name]}
                      onChange={handleInputChange}
                      error={error}
                      inputStyle={inputStyle}
                    />
                  );
                })}
              </div>

              {/* Additional fields */}
              {LOAN_FORM_FIELDS?.ADDITIONAL_FIELDS?.map((field) => {
                const name = field.name;
                const error = field.getError(formData[name], isSubmitted);

                return (
                  <LoanFormField
                    key={field.name}
                    field={field}
                    value={formData[name]}
                    onChange={name === "age" ? sanitizedAge : handleInputChange}
                    error={error}
                    inputStyle={inputStyle}
                  />
                );
              })}

              {/* isEmployee checkbox */}
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-5 h-5 bg-gray-100 border border-gray-300 rounded flex items-center justify-center peer">
                    <input
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          isEmployee: e.target.checked,
                          salary: "",
                          amount: 500,
                        }));
                        setIndex(0);
                      }}
                      checked={formData.isEmployee}
                      name="isEmployee"
                      type="checkbox"
                      className="absolute opacity-0 peer"
                    />
                    <svg
                      className="w-4 h-4 text-gray-600 hidden peer-checked:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Are you an employee?</span>
                </label>
                {!formData.isEmployee && isSubmitted && (
                  <span className={`text-red-500`}>
                    You must confirm you are an employee
                  </span>
                )}
              </div>

              {/* Salary options */}
              <div
                className={`relative flex flex-col ${formData.isEmployee ? "" : "hidden"}`}
              >
                <div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleIsSelected();
                    }}
                    className="bg-gray-100 hover:bg-gray-200 rounded-2xl px-4 py-6 cursor-pointer"
                  >
                    {formData.salary ? formData.salary : "Choose salary"}
                  </div>
                  {!formData.salary && isSubmitted && (
                    <span className={`text-red-500`}>Enter your salary</span>
                  )}
                </div>

                <div
                  className={`w-full absolute rounded-2xl shadow-md overflow-hidden ${isSelected ? "" : "hidden"}`}
                >
                  {options.map((opt) => {
                    return (
                      <div
                        key={opt.id}
                        onClick={() => {
                          toggleIsSelected();
                          handleSalary(opt.option);
                        }}
                        className="w-full bg-gray-100 hover:bg-gray-200 px-4 py-6 border-b border-gray-200 cursor-pointer"
                      >
                        {opt.option}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Amount input */}
            <div
              className={`w-full lg:w-xl flex flex-col gap-3 ${formData.salary ? "" : "hidden"}`}
            >
              <label>Choose amount</label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={steps?.length ? steps.length - 1 : 0}
                  step={1}
                  onChange={(e) => {
                    const newIndex = Number(e.target.value);
                    setIndex(newIndex);
                    handleAmount(steps?.[newIndex] ?? 500);
                  }}
                  value={index}
                  name="amount"
                  className="w-full accent-gray-950"
                ></input>
                <span className="font-semibold">
                  {steps && steps.length > 0 ? steps[index] : formData.amount}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={isLoading}
          className="bg-gray-950 hover:bg-gray-900 disabled:bg-gray-100 disabled:shadow-none disabled:text-black rounded-2xl shadow-xl text-white font-medium py-6 cursor-pointer"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
