import { Agency } from "@/database/models";
  

export const GET = async (req, event) => {
    
      try {
        const Agence = await Agency.findByPk(event.params.idAgence);
        return new Response(JSON.stringify(Agence),{status:200})

      } catch (error) {
        return error
      }
          
    
  };