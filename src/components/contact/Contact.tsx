"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { clsx } from "clsx";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <ContactInfoItem
              icon={<MapPin />}
              label="Address"
              value="Bhopal, India"
              href="https://maps.app.goo.gl/WqGXgfNHutuimL9o9"
            />
            <ContactInfoItem
              icon={<Phone />}
              label="Phone"
              value="+91 9479906370"
              href="tel:+919479906370"
            />
            <ContactInfoItem
              icon={<Mail />}
              label="Email"
              value="sourabhnateria.cse@gmail.com"
              href="mailto:sourabhnateria.cse@gmail.com"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 border shadow-sm bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-100 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 transition-all bg-white border rounded-lg outline-none dark:bg-slate-950 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 placeholder:text-slate-400 dark:text-white"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className="w-full px-4 py-3 transition-all bg-white border rounded-lg outline-none dark:bg-slate-950 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 placeholder:text-slate-400 dark:text-white"
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 transition-all bg-white border rounded-lg outline-none dark:bg-slate-950 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 placeholder:text-slate-400 dark:text-white"
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-3 transition-all bg-white border rounded-lg outline-none resize-none dark:bg-slate-950 border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 placeholder:text-slate-400 dark:text-white"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={clsx(
                  "w-full flex items-center justify-center gap-2 py-4 rounded-lg font-medium transition-all text-white",
                  status === "success"
                    ? "bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700",
                  "disabled:opacity-70 disabled:cursor-not-allowed",
                )}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-sm text-center text-red-500">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 group"
    >
      <div className="p-3 text-blue-600 transition-transform bg-blue-100 rounded-lg dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium tracking-wider uppercase text-slate-400">
          {label}
        </h4>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </a>
  );
}
