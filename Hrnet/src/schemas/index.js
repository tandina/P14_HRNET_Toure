import * as yup from "yup";

export const newEmployeeSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "le prénom doit avoir 3 caracthères mini")
    .required("Ce champ est requis"),
  lastname: yup
    .string()
    .min(3, "le nom doit avoir 3 caracthères mini")
    .required("Required"),
  birthdate: yup
    .date()
    .required("Ce champ est requis")
    .min(new Date().getFullYear() - 60, "Vous devez avoir au moins 60 ans")
    .max(new Date().getFullYear() - 18, "Vous devez avoir moins de 18 ans"),
  dateOfBegining: yup
    .date()
    .required("Ce champ est requis")
    .min(
      new Date().getFullYear() - 10,
      "Vous avez été employer avant la date de création de la société ?..."
    )
    .max(
      new Date().getFullYear() + 1,
      "pour un recrutement plus tard veuillez contacter le superviseur"
    ),

  département: yup
    .string()
    .oneOf(
      ["Ventes", "Commercial", "RH", "Juridique"],
      "veuillez choisir votre metier"
    )
    .required("Ce champ est requis"),
  street: yup
    .string()
    .min(5, "veuillez communiqué votre rue complète")
    .required("Ce champ est requis"),
  city: yup.string().required("Ce champ est requis"),
  town: yup
    .string()
    .min(5, "veuillez choisir une commune dans la liste")
    .required("Ce champ est requis"),
  zipcode: yup
    .number()
    .positive()
    .integer()
    .required("Ce champ est requis")
    .min(2, "veuillez indiqué un cp valable - min 2 chiffres"),
});
