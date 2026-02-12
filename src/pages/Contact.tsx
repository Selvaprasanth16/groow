import { useState } from "react";
import { Send } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-16">
      <SectionWrapper>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center font-heading text-4xl font-bold md:text-5xl">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
            Have a project idea? Want to collaborate? Drop us a message and we'll get back to you.
          </p>

          {submitted ? (
            <div className="mt-14 rounded-xl bg-card p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Send size={28} className="text-primary" />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold">Message Sent!</h2>
              <p className="mt-2 text-muted-foreground">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-14 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="gradient-bg inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
