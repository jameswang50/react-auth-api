import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Input from '../components/Input';

import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

import useForm from '../hooks/useForms';

const LOGIN = gql`
    mutation LOGIN($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
        }
    }
`;

function Login({history}) {
  const [sendLogin] = useMutation(LOGIN);

  const submitLogin = async (fields) => {
    const mutation = await sendLogin({
      variables: { ...fields }
    }).catch(e => console.log('Error: ', e));
    if (mutation) {
      const { login } = mutation.data;
            localStorage.setItem('blogToken', login.token);
            history.push('/')
    }
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(submitLogin);
  return (
    <>
      <Navbar/>
      <Header/>
      <main className="container">
        <section className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form onSubmit={handleSubmit}>

              <Input name="email"
                     label="Email"
                     placeholder="Email"
                     value={inputs.email}
                     onChange={handleInputChange}
                     type="email"
                     isRequired={true}/>

              <Input name="password"
                     label="Password"
                     placeholder="Password"
                     value={inputs.password}
                     onChange={handleInputChange}
                     type="password"
                     isRequired={true}/>


              <button className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;