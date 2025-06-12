'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Loading } from '@/components/ui/loading';

const Contact = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const telegramToken = '7713185925:AAHL8IYZsZYFPUeRvRp6Xz8Lu2swm9AH0jQ';
      const chatId = '-1002577177185';
      const text = `Новый Лид для Orlean Group:\nФИО: ${formData.firstName} ${formData.lastName}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\nСообщение: ${formData.message}`;

      const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: text }),
      });

      if (response.ok) {
        toast.success(t('pages.contact.messages.success'));
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error(t('pages.contact.messages.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section id="contact-hero" className="pt-10 lg:pt-20">
        <div className="container px-4">
          <div className="border-primary border-b pb-5">
            <h2 className="text-copy-title max-w-6xl text-left text-4xl font-bold tracking-normal min-[380px]:text-5xl lg:text-6xl dark:text-white">{t('pages.contact.title')}</h2>
          </div>
        </div>
      </section>
      <section id="contact" className="py-10 lg:py-14">
        <div className="container px-4">
          <div className="bg-primary dark:bg-input/30 grid grid-cols-1 gap-4 overflow-hidden rounded-[24px] p-4 shadow-lg md:grid-cols-3">
            {/* Left Side: Heading, Subheading, Contact Info */}
            <div className="bg-primary dark:bg-input/30 col-span-2 flex flex-col justify-between rounded-[24px] px-4 py-8 lg:px-20 lg:py-32">
              <div>
                <h2 className="mb-2 text-3xl font-bold min-[380px]:text-4xl lg:text-5xl">
                  <span className="block text-lime-300">{t('pages.contact.form.title-1')}</span>
                  <span className="block text-white">{t('pages.contact.form.title-2')}</span>
                </h2>
              </div>
              <div className="mt-8">
                <p className="mb-2 text-sm font-semibold text-white/80">{t('pages.contact.form.text')}</p>
                <div className="mb-2 flex items-center gap-3 text-lg font-medium text-white/90">
                  <Phone className="h-6 w-6" />
                  <span>+998 99 123 45 67</span>
                </div>
                <div className="flex items-center gap-3 text-lg font-medium text-white/90">
                  <Mail className="h-6 w-6" />
                  <span>info@orlean.group</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="col-span-1 flex items-center justify-center rounded-xl border bg-white p-6 lg:p-12">
              <div className="mx-auto w-full max-w-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="text-primary mb-1 block text-xs font-bold">{t('pages.contact.form.first-name')}</label>
                      <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t('pages.contact.form.placeholder.first-name')} className="border-primary/20 text-primary placeholder:text-primary/40 focus:ring-none h-11 rounded-xl bg-white focus:border-none focus:ring-offset-0 focus:outline-none lg:h-12" />
                    </div>
                    <div>
                      <label className="text-primary mb-1 block text-xs font-bold">{t('pages.contact.form.last-name')}</label>
                      <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t('pages.contact.form.placeholder.last-name')} className="border-primary/20 text-primary placeholder:text-primary/40 focus:ring-none h-11 rounded-xl bg-white focus:border-none focus:ring-offset-0 focus:outline-none lg:h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="text-primary mb-1 block text-xs font-bold">{t('pages.contact.form.email')}</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('pages.contact.form.placeholder.email')} className="border-primary/20 text-primary placeholder:text-primary/40 focus:ring-none h-11 rounded-xl bg-white focus:border-none focus:ring-offset-0 focus:outline-none lg:h-12" />
                  </div>
                  <div>
                    <label className="text-primary mb-1 block text-xs font-bold">{t('pages.contact.form.phone')}</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" className="border-primary/20 text-primary placeholder:text-primary/40 focus:ring-none h-11 rounded-xl bg-white focus:border-none focus:ring-offset-0 focus:outline-none lg:h-12" />
                  </div>
                  <div>
                    <label className="text-primary mb-1 block text-xs font-bold">{t('pages.contact.form.message')}</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message" className="border-primary/20 text-primary placeholder:text-primary/40 focus:ring-none min-h-[100px] resize-none rounded-xl bg-white focus:border-none focus:ring-offset-0 focus:outline-none lg:min-h-[120px]" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="group bg-primary hover:border-primary/20 hover:bg-primary/90 h-11 w-full rounded-xl border-2 border-transparent font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 lg:h-12">
                    <span className="mr-2 text-sm lg:text-base">{isSubmitting ? 'Отправка...' : t('pages.contact.form.send')}</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
