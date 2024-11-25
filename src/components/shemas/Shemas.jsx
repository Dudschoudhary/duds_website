import * as Yup from 'yup';

export const validaionForm = Yup.object({
    name:Yup.string().min(2).required("Enter your name"),
    email:Yup.string().email().required("Enter valid email"),
    message:Yup.string().required("Enter message..."),
})