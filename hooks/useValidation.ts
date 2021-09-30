import * as Yup from 'yup';
import createSchema from '../validations/schema';
const useValidation = <T extends Record<string, string>>(initialValues: T) =>
  Yup.object().shape(createSchema(initialValues) ?? {});

export default useValidation;
