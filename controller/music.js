const MusicModel = require("../models/music");

const findMusic = async (req, res) => {
  const musicList = await MusicModel.find({});

  if (musicList.length > 0) {
    res.send(musicList);
  } else {
    res.status(404).send("No music found ");
  }
};

// const listMusic = async (req, res) => {
//   const listMusic = await MusicModel.list({});

//   if (listMusic) {
//     res.send(listMusic);
//   } else {
//     res.status(500).send("404 not found");
//   }
// };
const createMusic = async (req, res) => {
  const { name, age, songs, social } = req.body;

  const addMusic = await MusicModel.create({
    name,
    age,
    songs,
    social,
  });
  if (addMusic) {
    res.send(addMusic);
  } else {
    res.status(500).send("Unsuccessful ");
  }
};

const editField = async (req, res) => {
  const documentId = req.params.id;
  const field = req.query.field;
  const value = req.query.value;

  const artist = await MusicModel.updateOne({ id: documentId, [field]: value });

  if (artist) {
    res.send("Successful");
  } else {
    res.status(500).send("Not Successful");
  }
};
const deleteField = async (req, res) => {
  const documentId = req.params.id;
  const field = req.query.field;
  const value = req.query.value;

  const artist = await MusicModel.updateOne(
    { id: documentId },
    {
      $unset: {
        [field]: "",
      },
    },
  );

  if (artist) {
    res.send("Successful");
  } else {
    res.status(500).send("Not Successful");
  }
};

const editNestedField = async (req, res) => {
  const documentId = req.params.id;
  const field = req.query.field;
  const subField = req.query.subField;
  const value = req.query.value;

  const artist = await MusicModel.findById(documentId);

  artist[field][subField] = value;

  const update = await artist.save();

  if (update) {
    res.send("Successful");
  } else {
    res.status(500).send("Not Successful");
  }
};
const deleteNestedField = async (req, res) => {
  const documentId = req.params.id;
  const field = req.query.field;
  const subField = req.query.subField;

  const query = `${field}.${subField}`;

  const artist = await MusicModel.updateOne(
    {
      _id: documentId,
    },
    {
      $unset: {
        [query]: "",
      },
    },
  );

  if (artist) {
    res.send("Successful");
  } else {
    res.status(500).send("Not Successful");
  }
};
const editNestedArray = async (req, res) => {
  const arrayId = req.params.arrayId;

  const { value } = req.body;
  const query = `${field}.${subField}`;

  const artist = await MusicModel.updateOne(
    {
      "songs._id": arrayId,
    },
    {
      $set: {
        "songs.$.title": value,
      },
    },
  );

  if (artist) {
    res.send("Successful");
  } else {
    res.status(500).send("Not Successful");
  }
};
const deleteNestedArray = async (req, res) => {
  const arrayId = req.params.arrayId;

  const { value } = req.body;
  const query = `${field}.${subField}`;

  const artist = await MusicModel.updateOne(
    {
      "songs._id": arrayId,
    },
    {
      $pull: {
        songs: { _id: arrayId },
      },
    },
  );

  if (artist) {
    res.send("Successful");
  } else {
    res.status(500).send("Not Successful");
  }
};
const listMusic = async (req, res) => {
  const listMusic = await MusicModel.find({});

  if (listMusic.length > 0) {
    return res.json(listMusic);
  }
  return res.status(404).json({ message: "Music not found" });
};

module.exports = {
  findMusic,
  createMusic,
  editField,
  deleteField,
  editNestedField,
  deleteNestedField,
  editNestedArray,
  deleteNestedArray,
  listMusic,
};
