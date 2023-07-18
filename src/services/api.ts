import axios, { AxiosError, AxiosResponse } from "axios";
import BudgetData from "../interfaces/BudgetData";
import EmailData from "../interfaces/EmailData";
import emailjs from '@emailjs/browser'

const sendEmail = async (params: BudgetData) => {
  const budgetData: any = {
    name: params.name,
    phone: params.phone,
    email: params.email,
    services: params.services,
    brand: params.brand,
  };

  emailjs.send("service_4dawh3p", "template_ymyzoe9", budgetData, "4CC8-nm5KRT08EUIc")
  .then((response) => {
    console.log("EMAIL ENVIADO COM SUCESSO")
  }, (err) => {
    console.log("ERRO AO ENVIAR EMAIL")
  })

};

export default sendEmail;