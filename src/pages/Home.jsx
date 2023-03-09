import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import Excercises from "../Components/Excercises";
import SearchExercises from "../Components/SearchExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
      <Excercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
