import axios, { AxiosError, AxiosResponse } from "axios";
import BudgetData from "../interfaces/BudgetData";
import EmailData from "../interfaces/EmailData";

const sendEmail = async (params: BudgetData) => {
    const apiUrl = 'https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages';
    const apiKey = 'YOUR_API_KEY';
  
    const budgetData: BudgetData = {
        name: params.name,
        phone: params.phone,
        email: params.email,
        services: params.services,
        brand: params.brand,
    };

    const emailData: EmailData = {
        from: 'Excited User <mailgun@YOUR_DOMAIN_NAME>',
        to: ['YOU@YOUR_DOMAIN_NAME', 'bar@example.com'],
        subject: 'Olá, você recebeu um novo pedido de orçamento!',
        text: `${budgetData}`,
      };
  
    try {
      const response: AxiosResponse = await axios.post(apiUrl, emailData, {
        auth: {
          username: 'api',
          password: apiKey,
        },
      });
  
      console.log('E-mail enviado com sucesso!', response);
      // Lógica adicional, se necessário
    } catch (error: any) {
      console.error('Erro ao enviar o e-mail:', error);
      // Lógica de tratamento de erro, se necessário
    }
  };
  
  export default sendEmail;