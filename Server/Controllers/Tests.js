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



// const tumor = async(req, res) => {
//     try{
//         const email = res.locals.jwtData.email;
//         const user = await User.findOne({email});

//         if (!user) {
//             return res.status(404).send({
//                 message: 'User not found',
//             });
//         }

//         const imagePath = path.join('uploads/', req.file.filename);

//         //Flask promise
//         const result = await checkCondition(true);

//         const newUserTest = {
//             testName: 'tumor',
//             imagePath: imagePath,
//             diseaseType: result
//         };

//         user.Tests.push(newUserTest);

//         await user.save();

//         res.send({
//             message: 'Image uploaded and path stored successfully',
//             filePath: imagePath,
//         });
//     }

//     catch (error) {
//         console.error('Error storing the image path:', error);
//         res.status(500).send({
//             message: 'Error storing the image path',
//         });
//     }
// }

// export { tumor }





const tumor = async (req, res) => {
  try {
    const email = res.locals.jwtData.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const imagePath = path.join("uploads", req.file.filename);

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "tumor",
      imagePath: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    await res.send({
      message: "Image uploaded and path stored successfully",
      testName: "tumor",
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

    const imagePath = path.join("uploads", req.file.filename);

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "pneumonia",
      imagePath: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    res.send({
      message: "Image uploaded and path stored successfully",
      filePath: imagePath,
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

    const imagePath = path.join("uploads", req.file.filename);

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "alzheimer",
      imagePath: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    res.send({
      message: "Image uploaded and path stored successfully",
      filePath: imagePath,
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

    const imagePath = path.join("uploads", req.file.filename);

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "covid",
      imagePath: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    res.send({
      message: "Image uploaded and path stored successfully",
      filePath: imagePath,
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

    const imagePath = path.join("uploads", req.file.filename);

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "tumorSegmentation",
      imagePath: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    res.send({
      message: "Image uploaded and path stored successfully",
      filePath: imagePath,
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

    const imagePath = path.join("uploads", req.file.filename);

    //Flask promise
    const result = await checkCondition(true);

    const newUserTest = {
      testName: "heartDisease",
      imagePath: imagePath,
      diseaseType: result,
    };

    user.Tests.push(newUserTest);

    await user.save();

    res.send({
      message: "Image uploaded and path stored successfully",
      filePath: imagePath,
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
