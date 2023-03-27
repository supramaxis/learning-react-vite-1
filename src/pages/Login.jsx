import { useEffect, useState } from 'react';
import { useItems } from '../context/ItemsContext';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function Login() {
  const [email, setEmail] = useState('');
  const { loginWithMagicLink } = useItems();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    loginWithMagicLink(email);
  };

  // useEffect(() => {
  //   const user = supabase.auth.getUser()
  //   if (user) navigate('/');
  //   console.log('user has been redirected ');
  // }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-2 block'>
          <Label htmlFor='email4' value='Your email' />
        </div>
        <TextInput
          id='email4'
          type='email'
          icon={HiMail}
          onChange={e => setEmail(e.target.value)}
          placeholder='name@example.com'
          required={true}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
