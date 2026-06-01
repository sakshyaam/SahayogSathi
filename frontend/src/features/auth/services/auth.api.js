//frontend needs axios to communicate
import axios from "axios";

//with this. can replace axios.post with api.post
const api = axios.create({
    baseURL : "http:localhost:3000",
    withCredentials : true
})

export const register = async ({username,email,password}) =>{

    try {
      const response = await axios.post('/http://localhost:3000/api/auth/register',
                {
                    username, email, password

                },{
                    withCredentials : true,//allows cookies flow
                       
                }
            )
            return response.data;
} catch (error) {
    console.log(error);

}
}


export const login = async ({email,password}) =>{
    try {

       const response = await axios.post("http://localhoste:3000/api/auth/login",
            {
                email,password
            },
            {
                withCredentials : true
            }
        )
        
    } catch (error) {
        console.log(error);
    }
        return response.data;
}

export const logout = async () =>{
    try {
        const response = await axios.get("http://localhost:3000/api/auth/logout", {
            withCredentials : true
        });

        return response.data;

    } catch (error) {
        
    }
}


export const getMe = async () =>{
    try {
        const response = await axios.get("http://localhost:3000/api/auth/get-me",
            {
                withCredentials : true
            }
        )
    } catch (error) {
        console.log(error)
    }
    return response.data;
}