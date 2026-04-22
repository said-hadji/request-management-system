export default function Welcome() {
  const features = [
    { id: 1, title: "📄 Loan request form with validation" },
    { id: 2, title: "🧠 Basic approval / rejection logic" },
    { id: 3, title: "📊 Application tracking (UI simulation)" },
    { id: 4, title: "⚙️ State-driven interactions" },
    { id: 5, title: "🎯 Built as a hands-on learning project" },
  ];

  const titleStyle = "text-lg font-medium";
  const descriptionStyle = "w-full lg:w-xl text-black/70 leading-9";

  return (
    <div className={`lg:ml-90 flex-1 h-full flex p-4`}>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl sm:text-4xl font-bold">Loan App — Practice Project</h1>
        <p className={descriptionStyle}>
          A simple React-based loan application built for learning purposes.
          Focused on form handling, validation, and dynamic UI behavior.
        </p>
        <div className="flex flex-col gap-3">
          <h2 className={titleStyle}>Description</h2>
          <p className={descriptionStyle}>
            This project demonstrates how a basic loan system could work — from
            submitting applications to validating data and displaying results.
            It focuses on building clean UI, handling user input, and managing
            application state effectively.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className={titleStyle}>Features</h2>
          <ul className="space-y-2">
            {features.map((f) => {
              return <li key={f.id}>{f.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
