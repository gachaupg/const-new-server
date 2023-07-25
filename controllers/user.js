import user from "../models/user.js";


export const getUsers = async (req, res) => {
    const { page } = req.query;
    try {
      // const tours = await TourModal.find();
      // res.status(200).json(tours);
  
      const tours = await user.find();
      res.json(tours);
    } catch (error) {
      res.status(404).json({ message: "Something went " });
    }
  };