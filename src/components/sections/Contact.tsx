import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { personalInfo } from '../../data/personalInfo';
import { RevealOnScroll } from '../animations/RevealOnScroll';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const messageLength = watch('message')?.length || 0;

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Could not copy text: ', err);
    }
  }, []);

  const onSubmit = async (_data: ContactFormData) => {
    setFormStatus('loading');
    // Simulated submission — replace with EmailJS/Resend integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      reset();
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-xs font-mono text-brand-emerald mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>LET'S TALK / OPEN TO FULL-TIME ROLES</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let's build something extraordinary together.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
              Have a high-impact engineering role, ambitious product launch, or innovative team in mind? My inbox is always open.
            </p>

            {/* Primary Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-emerald hover:bg-emerald-400 text-black font-bold text-sm tracking-tight transition-all duration-300 shadow-[0_0_25px_rgba(0,229,153,0.3)] flex items-center justify-center gap-2"
              >
                <span>Get in Touch Directly</span>
                <span className="text-base">↗</span>
              </a>
              <button
                onClick={copyEmail}
                className={`w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs border transition-all flex items-center justify-center gap-2 group ${
                  copySuccess
                    ? 'border-brand-emerald/60 text-brand-emerald'
                    : 'border-white/10'
                }`}
              >
                <svg
                  className={`w-4 h-4 ${
                    copySuccess
                      ? 'text-brand-emerald'
                      : 'text-neutral-400 group-hover:text-brand-emerald'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span>
                  {copySuccess ? 'Copied to Clipboard!' : personalInfo.email}
                </span>
              </button>
            </div>

            {/* Contact Form */}
            <div className="mt-16 text-left">
              {formStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/30 text-center">
                  <div className="text-brand-emerald text-4xl mb-3">✓</div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400 text-sm">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-neutral-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      {...register('name')}
                      disabled={formStatus === 'loading'}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#161616] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-emerald/50 transition-all ${
                        errors.name
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-brand-emerald/50'
                      } disabled:opacity-50`}
                      placeholder="Alexander Chen"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <span>⚠</span> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-neutral-400 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      {...register('email')}
                      disabled={formStatus === 'loading'}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#161616] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-emerald/50 transition-all ${
                        errors.email
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-brand-emerald/50'
                      } disabled:opacity-50`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <span>⚠</span> {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-neutral-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register('message')}
                      disabled={formStatus === 'loading'}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#161616] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-emerald/50 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-brand-emerald/50'
                      } disabled:opacity-50`}
                      placeholder="Tell me about your project or role..."
                    />
                    <div className="flex justify-between mt-1.5">
                      {errors.message ? (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <span>⚠</span> {errors.message.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-[11px] text-neutral-500 font-mono">
                        {messageLength}/1000
                      </span>
                    </div>
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-400 flex items-center gap-2">
                      <span>⚠</span>
                      Failed to send message. Please try again or email directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full px-8 py-4 rounded-xl bg-brand-emerald hover:bg-emerald-400 text-black font-bold text-sm tracking-tight transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social Links Strip */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
              <a
                className="hover:text-brand-emerald transition-colors"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <span>•</span>
              <a
                className="hover:text-brand-emerald transition-colors"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <span>•</span>
              <a
                className="hover:text-brand-emerald transition-colors"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER / X
              </a>
              <span>•</span>
              <a
                className="hover:text-brand-emerald transition-colors"
                href="#"
              >
                RESUME (PDF) ↗
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
