// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const  Contact = () => {
 
  const [state, handleSubmit] = useForm("xlekrakp");
  if (state.succeeded) {
      return (<p>Thanks for joining!</p>);
  }
  return (
      <div className="container p-5 contact">
          <div className="row p-3 ">
              <div className="col-md-12 text-center ">
                  <h1><strong>Contact</strong></h1>
              </div>
          </div>
          <div className="row border bordure" >
                <div className="col-md-6 mt-5 ">
                    <p><strong>Nous sommes à votre disposition pour toutes vos demandes et besoins. N´hésitez pas à nous contacter pour plus information ou pour vos rendez-vous:</strong></p>
                    <div className="mt-3"><h3><strong className="farb">Charles Cantin</strong></h3></div>
                    <div className=""><strong className="farb">Adresse:</strong> Rue Dzébé 13</div>
                    <span className=""><strong className="farb">BP:</strong> 43092</span><span className="mt-3"><strong className="farb">     Ville:</strong> Adopkè</span>
                    <div className=""><strong className="farb">Tel:</strong> 00336 254 174 12 30</div>
                    <div className=""><strong className="farb">Mobil:</strong> 00336 152 174 12 30</div>
                    <div className="mb-5"><strong className="farb">Email:</strong> charles.cantin@gmail.com</div>
                </div>
                <div className="col-md-6 border bordurGauche" >
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-5">
                            <div className="col-lg-2 col-md-2 col-sm-2 pb-5">
                                <label className="farb" htmlFor="email">
                                    <strong>Email:</strong>
                                </label>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10">
                                <input className="form-control"
                                    id="email"
                                    type="email" 
                                    name="email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col-lg-2 col-md-3 col-sm-2 pb-5">
                                <label className="farb" htmlFor="email">
                                    <strong>Message:</strong>
                                </label>
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-10">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="submit">
                                <button type="submit" className="button outline" disabled={state.submitting}>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>              
            </div>            
        </div>
    )
}

export default Contact;