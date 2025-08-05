import { createContext, useState } from "react";

export const showFormContext = createContext(false);

export const ShowFormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  function toogleForm() {
    setShowForm((prev) => !prev);
    console.log(showForm);
  }
  return (
    <showFormContext.Provider value={{ showForm, setShowForm, toogleForm }}>
      {children}
    </showFormContext.Provider>
  );
};
