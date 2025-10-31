"use client";
import { FormikProvider } from "formik";
import { FaCheck } from "react-icons/fa";
import InputField from "@/components/form/InputField";
import TextAreaField from "@/components/form/TextAreaField";
import { useCommentForm } from "../hooks/useCommentForm";

const CommentForm = ({ slug }: { slug: string }) => {
  const { formik, handleToggle, isChecked, isLoading } = useCommentForm({
    slug,
  });

  return (
    <section className="padding-x my-[2rem] lg:my-[4rem]">
      <div className="rounded-[20px] px-[4rem] py-[2rem] shadow-[0px_0px_60px_30px_#00000008]">
        <h2 className="typography-h6 text-primary-500 pb-4 font-semibold">
          Submit your comment
        </h2>
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="grid max-w-[1280px] grid-cols-1 gap-3 sm:gap-6 lg:grid-cols-2"
          >
            {/* comment */}
            <div className="col-span-2">
              <TextAreaField
                name="comment"
                title="Message"
                placeholder="Enter Your Comment..."
                rows={8}
                isRequired
              />
            </div>

            {/*  Name */}
            <InputField
              name="name"
              title="Name"
              placeholder="Enter Your Name"
              type="text"
              isRequired
            />

            {/* Email */}
            <InputField
              name="email"
              title="Email"
              placeholder="Enter Your Email"
              type="email"
              isRequired
            />

            {/* save in my requirement */}
            <label
              htmlFor="custom-checkbox"
              className="col-span-2 ml-2 flex cursor-pointer items-center gap-3"
            >
              <div className="relative inline-block h-4 w-4.5 sm:w-4">
                <input
                  type="checkbox"
                  id="custom-checkbox"
                  className="peer hidden"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div className="peer-checked:bg-primary-500 border-border-500 peer-checked:border-primary-500 absolute inset-0 flex items-center justify-center rounded-[4px] border-2">
                  {isChecked && <FaCheck className="0 text-white lg:w-20" />}
                </div>
              </div>

              <p className="typography-paragraph-medium text-grey-500">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="bg-primary-500 typography-paragraph-large hover:bg-primary-700 w-full max-w-[12.5rem] cursor-pointer items-center rounded-[12px] px-4 py-2 font-medium text-white transition duration-300 ease-in-out"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </FormikProvider>
      </div>
    </section>
  );
};

export default CommentForm;
