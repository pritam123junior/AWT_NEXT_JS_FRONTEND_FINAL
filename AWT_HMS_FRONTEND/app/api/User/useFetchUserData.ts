import axios from 'axios';
import { useEffect, useState } from 'react';

interface UserData {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  address:string
}
const useFetchUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.user === 'true') {
        try {
          const response = await axios.get(`http://localhost:8000/Admin/getdmin`);
        
          if (response.status === 200) {
            setUserData(response.data);
          } else {
            console.log('Unauthorized');
          }
        } catch (error) {
          console.log('An error occurred');
        }
      }
    }

    fetchUserData();
  }, []);

  return userData;
};

export default useFetchUserData;
