import { object, string, number } from 'yup';

let productSchema = object({
    image: url().required(),
    title: string().required(),
    categor: string().required(),
    price: number().positive()
});