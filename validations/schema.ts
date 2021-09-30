import * as Yup from 'yup';

const schema = (type: string) => {
  switch (type) {
    case 'from':
      return Yup.string().required();
    case 'email':
      return Yup.string().email().required();
    case 'password':
      return Yup.string().min(6).matches(/D/g).required();
    default:
      return undefined;
  }
};

const createSchema = <T extends Record<string, string>>(initialValues: T): undefined | Record<string, any> => {
  const fieldNames = Object.keys(initialValues);

  return !Array.isArray(fieldNames) || fieldNames.length === 0
    ? undefined
    : fieldNames.reduce((acc, fieldName) => {
        return {
          ...acc,
          [fieldName]: schema(fieldName),
        };
      }, {});
};

export default createSchema;
