import Link from "next/link";

export const Title = ({ heading, headingStyle, headingStyle2, paragraph }) => {
  return (
    <div className="flex items-center justify-center flex-col bg4">
      <div className="lg:w-1/3 mx-5 text-center">
        <h2 className="text-4xl font-extrabold my-5">
          <span className="text-[#ea8b26]">{headingStyle2}</span>
          {heading} <span className="text-[#ea8b26]">{headingStyle}</span>
        </h2>
        <p className="p-2">{paragraph}</p>
      </div>
    </div>
  );
};

export const Button = ({ type, buttonText, buttonHandler }) => {
  return (
    <button
      type={type}
      onClick={buttonHandler}
      className="font-bold custom-bg hover:bg-[#25454d] text-white rounded-3xl w-[120px] p-2"
    >
      {buttonText}
    </button>
  );
};

export const Advice = ({ heading, title }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-blend-darken bg-[url('/dini-ilm.jpg')] p-10 my-20 lg:2/3 rounded-lg bg-cover bg-center">
        <div>
          <h2 className="font-bold lg:text-5xl text-2xl text-[#ea8b26] ">
            {heading}
          </h2>
          <h2 className="font-bold text-end text-[#ea8b26] ">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export const CustomLink = ({ linkHref, linkText }) => {
  return (
    <Link
      href={`${linkHref}`}
      className="font-bold bg-primary hover:bg-[#9bb200] hover:text-[#0e6c14] text-center text-white rounded-3xl w-[120px] p-2"
    >
      {linkText}
    </Link>
  );
};

export const TextInputWithLabel = ({ label, placeholder, id, htmlFor }) => {
  return (
    <div className="mb-2 block">
      <label htmlFor={htmlFor} className="text-black capitalize ">
        {label}
      </label>
      <input
        id={id}
        className="p-3 border-2 w-full rounded focus:border-red-600 outline-none capitalize "
        name="madrasaName"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export const TextInput = ({
  htmlFor,
  id,
  labelTitle,
  placeholder,
  name,
  type,
}) => {
  return (
    <div className="bg-gray-200 p-5 rounded w-[900px]">
      <label htmlFor={htmlFor} className="capitalize">
        {labelTitle}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        required
        placeholder={placeholder}
        className="p-2 w-full outline-none focus:ring-1 primary"
      />
    </div>
  );
};
