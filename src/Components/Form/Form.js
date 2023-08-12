import { motion } from "framer-motion";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="text-white mt-8">
      <div className="flex flex-col">
        <label className="mb-2 text-slate-400" for="Name">
          Name
        </label>
        <input className="mb-12 bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none " />
        <label className="mb-2 text-slate-400" for="Name">
          Email
        </label>
        <input className="mb-12 bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none " />
        <label className="mb-2 text-slate-400" for="Name">
          Message
        </label>
        <input className="bg-transparent border-b-slate-400 border-b-2 w-full focus:outline-none " />
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
