
import { Agency } from "@/database/models";
  

export const GET = async (req, res) => {
    
      try {
       
     
        const all_agencies = await Agency.findAll();
        console.log(all_agencies)
        return new Response(JSON.stringify(all_agencies),{status:200})

      } catch (error) {
        return error
      }
          
    
  };

export const POST = async (req, res) => {
  const {name, address, phone, city} = await req.json();
  try {
      const agence = new Agency({
          name,
          address, 
          city,
          phone
      });    

      await agence.save();

      return new Response(JSON.stringify(agence),{status:200})
  } catch (error) {
      return new Response('Faild to insert Prompt',{status:500})
  }
  };

  
  export const PUT = async (req, res) => {
    try {
      const updatedData = await req.json();
      const existingAgency = await Agency.findByPk(updatedData.id);
  
      if (!existingAgency) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
      }
      // Update the user object with the new data
      Object.assign(existingAgency, updatedData);
  
      // Save the updated user
      await existingAgency.save();
  
      return new Response(JSON.stringify(existingAgency), { status: 200 });
    } catch (error) {
      console.error('Failed to update user:', error);
      return new Response(JSON.stringify({ error: 'Failed to update user' }), { status: 500 });
    }
  };
  
