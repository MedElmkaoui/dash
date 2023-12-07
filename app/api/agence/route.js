
import { Agency } from "@/database/models";
  

export const GET = async (req, res) => {
    
      try {
        const all_agencies = await Agency.findAll();
        return new Response(JSON.stringify(all_agencies),{status:200})

      } catch (error) {
        return error
      }
          
    
  };

export const POST = async (req, res) => {
  const {name, adresse, fix, ville} = await req.json();
  try {
      const agence = new Agency({
          name,
          adresse, 
          fix,
          ville
      });    

      await agence.save();

      return new Response(JSON.stringify(agence),{status:200})
  } catch (error) {
      return new Response('Faild to insert Prompt',{status:500})
  }
  };
  
