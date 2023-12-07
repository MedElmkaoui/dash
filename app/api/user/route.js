
import { User } from "@/database/models";
  

export const GET = async (req, res) => {
    
      try {
        const all_users = await User.findAll();
        return new Response(JSON.stringify(all_users),{status:200})

      } catch (error) {
        return error
      }
          
    
  };

export const POST = async (req, res) => {
  const user = await req.json();
  try {
      const created_user = new User(user);    
      await created_user.save();

      return new Response(JSON.stringify(created_user),{status:200})
  } catch (error) {
      return new Response('Faild to insert Prompt',{status:500})
  }
  };
  
