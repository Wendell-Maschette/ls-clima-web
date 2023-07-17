import React, { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import Styles from '../../styles/budget.scss';
import { TextField, Checkbox } from '@mui/material';

const Budget =  React.forwardRef(({ onSectionScroll }, ref)=> {
    useEffect(() => {
        onSectionScroll();
    }, [onSectionScroll]);

    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [servicos, setServicos] = useState([]);
    const [marca, setMarca] = useState('');

    const handleChangeNome = (event) => {
        setNome(event.target.value);
    };

    const handleChangeEmpresa = (event) => {
        setEmpresa(event.target.value);
    };

    const handleChangeTelefone = (event) => {
        setTelefone(event.target.value);
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

    const handleChangeServicos = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setServicos([...servicos, value]);
        } else {
            setServicos(servicos.filter((servico) => servico !== value));
        }
    };

    const handleChangeMarca = (event) => {
        setMarca(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailError) {
            // Aqui você pode enviar os dados para onde quiser, como uma API, por exemplo
            console.log('Dados enviados:', { nome, empresa, telefone, email, servicos });

            // Limpa os campos após enviar os dados
            setNome('');
            setEmpresa('');
            setTelefone('');
            setEmail('');
            setServicos([]);
            setMarca('');
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
                    value={nome}
                    onChange={handleChangeNome}
                    placeholder="Digite seu nome ou empresa"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <InputMask
                    mask="(99) 99999-9999"
                    value={telefone}
                    onChange={handleChangeTelefone}
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
                        checked={servicos.includes('Instalação')}
                        onChange={handleChangeServicos}
                    />
                    Instalação
                    <br />
                    <Checkbox
                        value="Manutenção"
                        checked={servicos.includes('Manutenção')}
                        onChange={handleChangeServicos}
                    />
                    Manutenção
                    <br />
                    <Checkbox
                        value="Limpeza"
                        checked={servicos.includes('Limpeza')}
                        onChange={handleChangeServicos}
                    />
                    Limpeza e higienização
                    <br />

                    <Checkbox
                        value="Projeto"
                        checked={servicos.includes('Projeto')}
                        onChange={handleChangeServicos}
                    />
                    Projeto/Documentação
                    <br />
                </div>
                <div className='w-budget__section-form__form__field'>
                    <TextField
                        label="Marca desejada (opcional)"
                        value={marca}
                        onChange={handleChangeMarca}
                        placeholder="Digite a marca (opcional)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </div>
                <button className='w-budget__section-form__form__button'>Enviar</button>
            </form>
        </div>
    )
});

export default Budget;
