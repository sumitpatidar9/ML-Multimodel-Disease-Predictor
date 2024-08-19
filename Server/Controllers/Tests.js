import { User } from "../Models/UserModel.js";
import path from "path";




function checkCondition(condition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve("Yes");
        } else {
          reject("No");
        }
      }, 2000); 
    });
  }






const tumor = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Tumor",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Tumor",
      imagePath: imagePath,
      diseaseType: result,
    });
  } 
  
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};










const pneumonia = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Pneumonia",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Pneumonia",
      imagePath: imagePath,
      diseaseType: result,
    });
  } 
  
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};










const alzheimer = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Alzheimer",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Alzheimer",
      imagePath: imagePath,
      diseaseType: result,
    });
  } 
  
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};











const covid = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');
    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Covid",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Covid",
      imagePath: imagePath,
      diseaseType: result,
    });
  } 
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};










const tumorSegmentation = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Tumor Segmentation",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Tumor Segmentation",
      imagePath: imagePath,
      diseaseType: result,
    });
  }
  
  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};










const heartDisease = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename).replace(/\\/g, '/');

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "Heart Disease",
      imageUrl: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "Heart Disease",
      imagePath: imagePath,
      diseaseType: result,
    });
  } 

  catch (error) {
    console.error("Error storing the image path:", error);
    res.status(500).send({
      message: "Error storing the image path",
    });
  }
};









export { tumor, pneumonia, alzheimer, covid, tumorSegmentation, heartDisease };
