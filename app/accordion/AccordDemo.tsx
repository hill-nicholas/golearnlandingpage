import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What else does GoLearn offer?</AccordionTrigger>
          <AccordionContent>
          GoLearn stands as a beacon of academic advancement for African students, we offer a wide-range of e-learning resources ranging from a comprehensive video library, e-notes available for downloads and competitive quizzes and exams to keep track of your academic performances
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start">Can I track my child’s learning progress remotely?</AccordionTrigger>
          <AccordionContent>
          Definitely, you can monitor your child’s weekly progress. We send progress updates via electronic mail and SMS to ensure you are updated on your child’s academic growth
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can I create an account ?</AccordionTrigger>
          <AccordionContent>
          By following these easy steps you can get your child registered and ready to take his position as a Scholar, 

Step1: Navigate to the top-right corner of the GoLearn homepage, and click on signup 

Step2: A form sheet will pop-up, which you will then fill in the appropriate details such as ‘Your full-name, age of child and child’s name’ 

Step3: Great! you’re almost there, click the signup button and in fee minutes await an OTP (One-time Password) Note: The OTP is not your account password. 

Step4: Almost there! once you have received the mail or sms, input the code on the form and proceed to your Account Dashboard

Step5: Congratulations Scholar! you have now created your GoLearn account, if you need any help, feel free to reach out to our customer service team, dedicated to rendering 24/7 customer support ensuring your full satisfaction. Thank you ❤
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  