// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';  
import * as styles from '../styled';

function ContactForm() {
  const [state, handleSubmit] = useForm("xvoldbag");
  if (state.succeeded) {
      return (
        <div className={styles.confirmationContainerClass}>
          <div className={styles.confirmationClass}>Tip received!</div>
          <span>We'll be in touch</span>
        </div>
      )
  }
  return (
    <div className={styles.modalContainerClass}>
      <h2>Got a story? Tell us!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="who">
          Who's the fraudster*
        </label>
        <input
          id="who"
          type="text" 
          name="who"
          required
          placeholder="Dr. Scammy McScammerson IV"
        />
        <ValidationError 
          prefix="who" 
          field="who"
          errors={state.errors}
        />
        <label htmlFor="story">
          Break it down - what happened*
        </label>
        <textarea
          id="story"
          name="story"
          placeholder="Once upon a time"
          required
        />
        <ValidationError 
          prefix="story" 
          field="story"
          errors={state.errors}
        />
        <label htmlFor="email">
          Email to contact you*
          <span className={styles.subLabelClass}>Feel free to remain anonymous. We get it, no one wants to piss off a fraudster.</span>
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="anon@fraudstersluth.com"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="etc">
          Anything else on your mind?
        </label>
        <input
          id="etc"
          type="text" 
          name="etc"
          placeholder="You've got ONE shot, a one line pitch.... always be pluggin'."
        />
        <ValidationError 
          prefix="etc" 
          field="etc"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
}
export default ContactForm;