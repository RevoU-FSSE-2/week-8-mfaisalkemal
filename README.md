# Intermediate Assignment Week 8 - Simple Rest API About Financial Tracking

https://bronze-giraffe-cap.cyclic.app/fintrack/

## Technologies Used

- Node.js: A JavaScript runtime that allows executing code on the server side.
- Express.js: A popular web application framework for Node.js that simplifies building APIs and web applications.
- TypeScript: A superset of JavaScript that adds static typing for enhanced code quality and maintainability.

##  JSON Format Example
``
{
    "type": "cash-in",
    "name": "gaji",
    "detail": "bulan mei",
    "amount": "6000000"
}
``

``
{
    "type": "cash-out",
    "name": "token listrik",
    "detail": "bulan mei",
    "amount": "500000"
}
``

## Rest API Endpoints
1. Get
   - Get all transactions /fintrack
     
     Return all transactions
     ![w8_1](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/4c1cdba0-0b96-4c44-8929-80ba4df29248)
   - Get transaction by id /fintrack/:id
     
     Return a transaction by id
     ![w8_2](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/a0764eab-e9cf-4a72-b4f6-aa92d1fa8a76)
2. Post /fintrack/
   
   Create new transaction
   ![w8_3](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/f8c7d4ed-2444-4f06-a9b1-ed4d3c152c4a)
3. Put by id /fintrack/:id
   
   Update transaction by id
   
   before:
   ![w8_4-before](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/de6eb60f-fd4f-423f-8cb7-fc07297cc1a9)
   after:
   ![w8_4-after](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/add45db8-7baf-4a49-861b-cb14a966df7c)
5. Patch by id /fintrack/:id
   
   Update partially transaction by id

   before:
   ![w8_5-before](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/52b90c9d-fa40-4da3-b4b1-0784b85b1fbc)
   after:
   ![w8_5-after](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/df7fe933-6db1-4050-a259-767e97bca2de)
6. Delete by id /fintrack/:id
   
   Delete transaction by id
   
   before:
   ![w8_6-before](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/91d96479-a4be-44f8-8536-769c86a6b4cf)
   after delete id 2:
   ![w8_6-after](https://github.com/RevoU-FSSE-2/week-8-mfaisalkemal/assets/130155172/3403af0e-bd2a-4e2d-88b9-1c18554ac64d)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sRKW9Tsr)
