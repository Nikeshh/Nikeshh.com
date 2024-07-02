"use client";

import React, { createRef } from 'react';
import { Plane } from "lucide-react";
import { InlineWidget } from 'react-calendly';
import { ContactUserFormSchema } from '@/lib/types';
import { onCreateNewPageInDatabase } from "@/app/_connections/notion-connection";
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type ContactFormData = z.infer<typeof ContactUserFormSchema>;

const Contact = ({ activeNavbar }: { activeNavbar: string }) => {

  const contactFormRef = createRef<HTMLFormElement>();

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(ContactUserFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      details: '',
    }
  });

  const onContactFormSubmit = async (values: ContactFormData) => {
    try {

      const notionResponse = await onCreateNewPageInDatabase(
          "5b0b7647b75b419bbe54f88bf4b34c15",
          {
              "Name": {
                  "title": [
                      {
                          "text": {
                              "content": values.name
                          }
                      }
                  ]
              },
              "Email": {
                "email": values.email
              },
              "Phone Number": {
                "phone_number": values.phoneNumber
              },
              "Details": {
                "type": "rich_text",
                "rich_text": [
                  {
                    "type": "text",
                    "text": { "content": values.details }
                  }
                ]
              },
              "Tags": {
                  "type": "multi_select",
                  "multi_select": [
                      {
                        "name": "Nikeshh.com",
                        "color": "gray"
                      },
                      {
                          "name": "Contact",
                          "color": "green"
                      }
                  ]
              },
          }
      );

      if (notionResponse) {
          toast.success("Success", {
              description: 'Successfully saved your info',
          });
          reset();
      } else {
          toast.error("Failed", {
              description: 'Could not save your information',
          });
      }
    } catch (error) {
      toast.error("Failed", {
        description: 'Could not save your information',
      });
    }
  }

  return (
    <article className={`contact ${activeNavbar == "Contact" ? "active" : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.189374442145!2d-79.38393468447206!3d43.6532262791217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b09e82b7%3A0x4f9f2404d7a073a0!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1680454470784!5m2!1sen!2sus"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Me</h3>

        <form ref={contactFormRef} onSubmit={handleSubmit(onContactFormSubmit)} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              {...register('name')}
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
            {errors.name && <p>{errors.name.message}</p>}
            
            <input
              type="email"
              {...register('email')}
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="input-wrapper">
            <input
              type="tel"
              {...register('phoneNumber')}
              className="form-input"
              placeholder="Phone Number"
              required
              data-form-input
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </div>

          <textarea
            {...register('details')}
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>
          {errors.details && <p>{errors.details.message}</p>}

          <button className="form-btn" type="submit" disabled={!isValid} data-form-btn>
            <Plane />
            <span>Send Message</span>
          </button>
        </form>
        <span className="my-6 text-sm text-slate-500 text-center">-- or --</span>
        <InlineWidget url="https://calendly.com/nikeshhv/15min" styles={{ width: '100%', height: '1000px', background: 'hsla(0,0%,13%,1)' }} />
      </section>
    </article>
  );
};

export default Contact;
