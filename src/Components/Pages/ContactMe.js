import AnimatedDiv from "../UI/AnimatedDiv";
import Form from "../Form/Form";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <div className="w-screen lg:pl-56 bg-neutral-900 min-h-screen flex items-center justify-center">
        <AnimatedDiv className="m-10">
          <h1 className="text-white text-3xl">Contact me</h1>
          <p className="text-white">
            Feel free to contact me. I will reach you as soon as I can.{" "}
          </p>
            <Form handleSubmit={handleSubmit} />
        </AnimatedDiv>
      </div>
  );
};

export default ContactMe;
