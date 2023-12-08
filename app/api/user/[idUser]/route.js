import { User } from "@/database/models";
  

export const GET = async (req, event) => {
    
      try {
        console.log(event.params.idUser)
        const user = await User.findByPk(event.params.idUser);
        console.log(user)
        return new Response(JSON.stringify(user),{status:200})

      } catch (error) {
        return error
      }
          
    
  };