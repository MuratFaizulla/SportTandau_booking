import Field from "../models/Field.js";
// import Playground from "../models/Playground.js";

export const createField = async (req, res, next) => {
  const newField = new Field(req.body);
  try {
    const savedField = await newField.save();
    res.status(200).json(savedField);
  } catch (err) {
    next(err);
  }
};


export const updateField = async (req, res, next) => {
  try {
    const updatedField = await Field.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedField);
  } catch (err) {
    next(err);
  }
};
export const deleteField = async (req, res, next) => {
  try {
    await Field.findByIdAndDelete(req.params.id);
    res.status(200).json("Field has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getField = async (req, res, next) => {
  try {
    const field = await Field.findById(req.params.id);
    res.status(200).json(field);
  } catch (err) {
    next(err);
  }
};

export const getFields = async (req, res, next) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (err) {
    next(err);
  }
};


export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Field.countDocuments({ city:city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
// http://localhost:8800/api/fields/countByCity?cities=Астана,Алматы,Шымкент
export const countByType = async (req, res, next) => {
  try {
    const footballCount = await Field.countDocuments({ type: "Футбол" });
    const boleyballCount = await Field.countDocuments({ type: "Волейбол" });
    const basketballCount = await Field.countDocuments({ type: "Баскетбол" });
    const tennisCount = await Field.countDocuments({ type: "Теннис" });


    res.status(200).json([
      { type: "football", count: footballCount },
      { type: "boleyball", count: boleyballCount },
      { type: "basketball", count: basketballCount },
      { type: "tennis", count: tennisCount },
    ]);
  } catch (err) {
    next(err);
  }
};




export const getFieldsByType = async (req, res) => {
  try {
    const { type } = req.query;
    const fields = await Field.find({ type });
    
    if (!fields || fields.length === 0) {
      return res.status(404).json({ error: `No fields found for type: ${type}` });
    }

    res.status(200).json(fields);
  } catch (error) {
    console.error('Error getting fields by type:', error);
    res.status(500).json({ error: 'Failed to get fields' });
  }
};






// export const getFieldPlaygrounds = async (req, res, next) => {
//   try {
//     const field = await Field.findById(req.params.id);
//     const list = await Promise.all(
//       field.playgrounds.map((playground) => {
//         return Playground.findById(playground);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };
