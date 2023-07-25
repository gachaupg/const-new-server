import products from "../models/products.js";

export const getTours = async (req, res) => {
    const { page } = req.query;
    try {
      // const tours = await TourModal.find();
      // res.status(200).json(tours);
  
      const tours = await products.find();
      res.json(tours);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
  };