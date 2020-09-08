import React from 'react';
import  './style.css';
import Input from '../../Components/Input/Input'


function Cadastro () {
    return(
        <div className="page-container">
            <header className="page-header">Cadastro</header>
            <form>
                <fieldset>
                    <Input
                        name="Nome"
                        label="Nome"
                        type="text"/>
                </fieldset>
                <fieldset>
                    <Input
                        name="Sobrenome"
                        label="Sobrenome"
                        type="text"
                    />
                </fieldset>
                <fieldset>
                    <Input
                        name="Email"
                        label="Email"
                        type="email"
                    />
                </fieldset>
                <fieldset>
                    <Input
                        name="data-nasc"
                        label="Data de Nascimento"
                        type="date"
                    />
                </fieldset>
                <div>
                    <label></label>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;