import {
  InfoValidation,
  IntoValidation,
} from "@/components/login/validation-method";

const pageValidationMethod = () => {
  return (
    <section className="md:flex md:justify-between md:items-start px-4 py-8  ">
      <InfoValidation />
      <IntoValidation />
    </section>
  );
};

export default pageValidationMethod;
