import React, { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import '../../styles/blocks/budget.scss';
import { TextField, Checkbox } from '@mui/material';
import sendEmail from '../../services/api';
import BudgetData from '../../interfaces/BudgetData';

interface BudgetProps {
    onSectionScroll: () => void;
  }

const Budget =  React.forwardRef<HTMLDivElement, BudgetProps>(({ onSectionScroll }: any, ref)=> {
    useEffect(() => {
        onSectionScroll();
    }, [onSectionScroll]);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [services, setServices] = useState<string[]>([]);
    const [brand, setBrand] = useState('');

    const handleChangeNome = (event) => {
        setName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleBlurEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handleChangeServices = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        if (checked) {
            setServices([...services, value]);
        } else {
            setServices(services.filter((servico) => servico !== value));
        }
    };

    const handleChangeBrand = (event) => {
        setBrand(event.target.value);
    };

    const sendEmailService = (params) => {
        sendEmail(params);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailError) {
            // Aqui você pode enviar os dados para onde quiser, como uma API, por exemplo
            console.log('Dados enviados:', { name, phone, email, services, brand });
            const budget: BudgetData = {
                name,
                phone,
                email,
                services,
                brand
            }
            sendEmailService(budget)
            // Limpa os campos após enviar os dados
            setName('');
            setPhone('');
            setEmail('');
            setServices([]);
            setBrand('');
        }
    };

    return (
        <div className='w-budget' ref={ref}>
            <div className='w-budget__section-title'>
                <h1 className='w-budget__section-title__title'> Orçamento </h1>
                <h3 className='w-budget__section-title__subtitle'> Solicite agora um orçamento personalizado! <br />Basta informar seus dados abaixo para entrarmos em contato com você.</h3>
            </div>
            <div className='w-budget__section-form'>

            </div>
            <form className='w-budget__section-form__form' onSubmit={handleSubmit}>
                <TextField
                    label="Nome/Empresa"
                    value={name}
                    onChange={handleChangeNome}
                    placeholder="Digite seu nome ou empresa"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <InputMask
                    mask="(99) 99999-9999"
                    value={phone}
                    onChange={handleChangePhone}
                >
                    {() => (
                        <TextField
                            label="Telefone"
                            placeholder="(99) 99999-9999"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    )}
                </InputMask>

                <TextField
                    label="Email"
                    value={email}
                    onChange={handleChangeEmail}
                    onBlur={handleBlurEmail}
                    error={emailError}
                    helperText={emailError ? 'Email inválido' : ''}
                    placeholder="Digite seu email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <div className='w-budget__section-form__form__field'>
                    <p>Tipo de serviço:</p>
                    <Checkbox
                        value="Instalação"
                        checked={services.includes('Instalação')}
                        onChange={handleChangeServices}
                    />
                    Instalação
                    <br />
                    <Checkbox
                        value="Manutenção"
                        checked={services.includes('Manutenção')}
                        onChange={handleChangeServices}
                    />
                    Manutenção
                    <br />
                    <Checkbox
                        value="Limpeza"
                        checked={services.includes('Limpeza')}
                        onChange={handleChangeServices}
                    />
                    Limpeza e higienização
                    <br />

                    <Checkbox
                        value="Projeto"
                        checked={services.includes('Projeto')}
                        onChange={handleChangeServices}
                    />
                    Projeto/Documentação
                    <br />
                </div>
                <div className='w-budget__section-form__form__field'>
                    <TextField
                        label="Marca desejada (opcional)"
                        value={brand}
                        onChange={handleChangeBrand}
                        placeholder="Digite a marca (opcional)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </div>
                <button onClick={handleSubmit} className='w-budget__section-form__form__button'>Enviar</button>
            </form>
        </div>
    )
});

export default Budget;
