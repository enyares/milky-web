import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccordionComp from "../components/FAQPage/AccordionComp";
import Title from "../components/Title/Title";
import TitleCenter from "../components/Title/TitleCenter";
const array = [
  {
    question:
      "Mauris venenatis sed posuere purus nibh pretium. Urna leo id enim nec tincidunt integer condimentum felis?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
  {
    question:
      "Erat vitae et tortor in quis pharetra congue at quis. Quam risus donec egestas egestas?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
  {
    question:
      "Euismod eros, lectus donec sed. Ut ipsum pretium erat fermentum enim varius?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
  {
    question:
      "Justo, sed iaculis in odio egestas habitant fringilla tortor nec. In ornare consequat suspendisse morbi?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
  {
    question:
      "Nulla urna in euismod arcu mi mauris lectus netus. Vitae porttitor id turpis netus tortor sed in accumsan, turpis?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
  {
    question:
      "A et placerat nisl, a odio scelerisque. Netus amet, enim urna urna leo quisque mauris justo?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
  {
    question:
      "Tortor augue maecenas faucibus sem sem hendrerit. Ipsum sagittis condimentum sem placerat eget turpis sit tortor?",
    answer:
      "Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis. Mauris sapien sapien pulvinar mi malesuada tortor. Adipiscing sit suscipit feugiat bibendum in aliquet. Urna pretium, nulla sed est. Cras faucibus quisque varius duis dictumst. Nunc, curabitur morbi donec donec quis.",
  },
];
const FAQ = () => {
  return (
    <Box>
      <TitleCenter
        title='Frequently Asked Questions'
        fontSize='80px'
        py='10%'
      />
      {array.map((item, index) => {
        return <AccordionComp question={item.question} answer={item.answer} />;
      })}
      <Divider sx={{ py: 3 }} />
      <Title title='Contact us' fontSize='48px' button />
    </Box>
  );
};

export default FAQ;
