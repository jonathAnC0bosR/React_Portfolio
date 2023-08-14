import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//eslint-disable-next-line
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//eslint-disable-next-line
const textRegex = /^[a-zA-Z].*[\s\.]*$/

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [emailInputIsFocus, setEmailInputIsFocus] = useState(false);
  const [messageInput, setMessageInput] = useState(false);
  const [messageIsValid, setMessageIsValid ] = useState(true);
  const [nameInputFocus, setNameInputFocus] = useState(false);
  const [nameIsvalid, setNameIsValid] = useState(true);
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
      if(messageInput) {
        setMessageIsValid(form.message.trim.length > 0 && form.message.trim().match(textRegex));
      }
    }, 1500)

    return () => {
      clearTimeout(identifier)
    }
  }, [form.message, messageInput])

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (nameInputFocus) {
        setNameIsValid(form.name.trim().length >= 0 && form.name.trim().match(textRegex));
      }
    }, 1500);
    return () => {
      clearTimeout(identifier);
    };
  }, [form.name, nameInputFocus]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (emailInputIsFocus) {
        setEmailIsValid(
          form.email.trim().length > 1 && form.email.trim().match(emailRegex)
        );
      }
    }, 1500);
    return () => {
      clearTimeout(identifier);
    };
  }, [form.email, emailInputIsFocus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (  
    <form onSubmit={handleSubmit} className="text-white mt-8">
      <div className="flex flex-col">
        {!nameIsvalid &&  (
          <p className="text-red-900 text-lg font-semibold">Please enter a valid non-empty name</p>
        )}
        <label htmlFor="name" className="mb-2 text-slate-400">
          Name
        </label>
        <input
          onChange={handleInputChange}
          onFocus={() => setNameInputFocus(true)}
          type="text"
          name="name"
          className="mb-12 bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none "
        />
        {!emailIsValid && (
          <p className="text-red-900 text-lg font-semibold">Please enter a valid email</p>
        )}
        <label className="mb-2 text-slate-400">Email</label>
        <input
          onChange={handleInputChange}
          onFocus={() => setEmailInputIsFocus(true)}
          name="email"
          className="mb-12 bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none "
        />
        {!messageIsValid && <p className="text-red-900 text-lg font-semibold">Please enter a valid non-empty message</p>}
        <label className="mb-2 text-slate-400">Message</label>
        <input
          name="message"
          onChange={handleInputChange}
          onFocus={() => setMessageInput(true)}
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
