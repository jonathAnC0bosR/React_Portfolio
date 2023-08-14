import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//eslint-disable-next-line
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [inputIsFocus, setInputIsFocus] = useState(false);

  const [emailIsValid, setEmailIsValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (inputIsFocus) {
        setEmailIsValid(
          form.email.trim().length > 1 && form.email.trim().match(emailRegex)
        );
      }
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [form.email, inputIsFocus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="text-white mt-8">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 text-slate-400">
          Name
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          className="mb-12 bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none "
        />
        {!emailIsValid && (
          <p className="text-red-900">Please enter a valid email</p>
        )}
        <label className="mb-2 text-slate-400">Email</label>
        <input
          onChange={handleInputChange}
          onFocus={() => setInputIsFocus(true)}
          name="email"
          className="mb-12 bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none "
        />
        <label className="mb-2 text-slate-400">Message</label>
        <input
          name="message"
          onChange={handleInputChange}
          className="bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none "
        />
      </div>
      <div className="m-8 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          whileTap={{ scale: 0.8 }}
          className="text-black bg-slate-400 py-2 px-10 rounded-lg"
        >
          Send
        </motion.button>
      </div>
    </form>
  );
};

export default Form;
