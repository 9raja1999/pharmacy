import React, { FC } from 'react';
import { Input } from 'antd';
import styles from '../../../styles/registration/Registration.module.scss';

interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
}

const FormField: FC<FormFieldProps> = ({ label, id, placeholder }) => {
  return (
    <div style={{ margin: "10px 0"}} >
      <label htmlFor={id}>
        {label}
        <span className={styles.color}>*</span>
      </label>
      <Input placeholder={placeholder} id={id} aria-label={label} />
    </div>
  );
};

export default FormField;
