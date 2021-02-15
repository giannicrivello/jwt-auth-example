import React, { useState } from 'react';
import { RouteChildrenProps, RouteComponentProps } from 'react-router-dom';
import { useRegisterMutation } from '../generated/graphql';


export const Register: React.FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register] = useRegisterMutation();
        return (
            <div>
                <form onSubmit={async e => {
                    e.preventDefault()
                    console.log('form submitted')
                    console.log(email, password);
                    const response = await register({
                        variables: {
                            email,
                            password
                        }
                    });
                    console.log(response)


                    history.push('/')

                }}>
                    <div>
                        <input value={email} placeholder="email" onChange={e => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div>
                        <input value={password} placeholder="password" onChange={e => {
                            setPassword(e.target.value);
                        }} />
                    </div>
                    <button type='submit'>register</button>
                </form>
            </div>
        );
}