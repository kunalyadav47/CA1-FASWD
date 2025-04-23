import React from 'react';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const Data = [
    {
      Customer_name : "Kunal Yadav",
      Reveiw_text : "This is awesome"
    },{
      Customer_name : "Rajeev Yadav",
      Reveiw_text : "Highly supportive service"
    },{
      Customer_name : "Anamika Yadav",
      Reveiw_text : "Very very good website and user fiendly"
    }
  ]
  return(
    <TestimonialCard teams = {Data}/>
  )
}

export default App;