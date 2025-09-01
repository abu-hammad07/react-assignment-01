import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const validate = () => {
    let valid = true;
    let tempErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: false });

    try {
      const response = await fetch("https://formspree.io/f/mqapkbgg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus({ submitting: false, success: true, error: false });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-10">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        {/* LEFT: Contact Form */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Fill out the form and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-lg">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                className={`w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                className={`w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className={`w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {/* Status messages */}
            {status.success && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {status.error && (
              <p className="text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* RIGHT: Image */}
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
