import bcrypt from 'bcrypt';
import { User } from "@/database/models";
  

export const GET = async (req, res) => {
    
      try {
        const all_users = await User.findAll({attributes: { exclude: ['password'] }});
        return new Response(JSON.stringify(all_users),{status:200})

      } catch (error) {
        return error
      }
          
    
  };

  export const POST = async (req, res) => {
    const user = await req.json();
  
    try {

      // Hash the user's password before saving it
      const hashedPassword = await bcrypt.hash(user.password, 10); // 10 is the saltRounds
  
      // Create a new User object with the hashed password
      const created_user = new User({
        username: user.username,
        isAdmin: user.isAdmin,
        email: user.email,
        password: hashedPassword,
      });
      // Save the user to the database
      await created_user.save();
      return new Response(JSON.stringify(created_user), { status: 200 });
    } catch (error) {
      console.error('Failed to insert user:', error);
      return new Response(JSON.stringify({ error: 'Failed to insert user' }), { status: 500 });
    }
  };


  export const PUT = async (req, res) => {
    try {
      const updatedData = await req.json();
      const existingUser = await User.findByPk(updatedData.id);
  
      if (!existingUser) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
      }
      // Check if the updated data includes a new password
      if (updatedData.password) {
        // Hash the new password before updating the user
        const hashedPassword = await bcrypt.hash(updatedData.password, 10); // 10 is the saltRounds
        updatedData.password = hashedPassword;
      }
      // Update the user object with the new data
      Object.assign(existingUser, updatedData);
  
      // Save the updated user
      await existingUser.save();
  
      return new Response(JSON.stringify(existingUser), { status: 200 });
    } catch (error) {
      console.error('Failed to update user:', error);
      return new Response(JSON.stringify({ error: 'Failed to update user' }), { status: 500 });
    }
  };

  
