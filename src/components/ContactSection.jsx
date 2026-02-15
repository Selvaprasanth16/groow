import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", projectDetails: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
        Let&apos;s <span className="gradient-text">Build Together</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Have a project in mind? We&apos;d love to hear about it. Get in touch with us today.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
            {/* <div className="rounded-xl bg-card p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Email</h3>
                  <p className="mt-1 text-muted-foreground">hello@groowmore.dev</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Phone</h3>
                  <p className="mt-1 text-muted-foreground">+91 (Available on request)</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">Location</h3>
                  <p className="mt-1 text-muted-foreground">India</p>
                </div>
              </div>
            </div> */}
        </div>

        <div className="rounded-xl bg-card p-8 border border-border">
          {submitted ? (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-heading text-xl font-bold text-primary">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">We&apos;ll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your project idea..."
                />
              </div>

              <button
                type="submit"
                className="gradient-bg w-full rounded-lg px-6 py-2.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
