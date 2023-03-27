import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/client';

export const ItemsContext = createContext();

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error('useItems must be used within a supabaseProvider');
  }
  return context;
};

export const SupabaseProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null)
  const [auth, setAuth] = useState(false)

  const loginWithMagicLink = async email => {
    try {
      const {error, data} = await supabase.auth.signInWithOtp({
        email,
      })
      if (error) {
        throw error;
      }
      alert('check your email for the magic link');
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
      alert(error.error_description || error.message);
    }
  };

  const createTask = async itemName => {
    try {
      const user = supabase.auth.user();

      const { error, data } = await supabase
        .from('items')
        .insert([{ name: itemName, userId: user.id }]);

      setItems([...items, ...data]);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
      alert(error.error_description || error.message);
    }
  };

  const getItems = async () => {
    try {
      const { data, error } = await supabase.from('items').select('*');

      if (error) {
        throw error;
      }
      setItems(data);
      // console.log('data from line 27', data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const {data} = supabase.auth.onAuthStateChange((event, session) => {
      
      if (event == 'SIGNED_IN') {
        setUser(session.user);
        console.log('user', session.user.email)
        setAuth(true);
      }
    })
    return () => {
      data.subscription.unsubscribe()
    }
  }, [])  

  return (
    <ItemsContext.Provider value={{ items, getItems, loginWithMagicLink, logout, user }}>
      {children}
    </ItemsContext.Provider>
  );
};

