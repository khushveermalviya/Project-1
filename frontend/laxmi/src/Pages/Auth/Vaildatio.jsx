 export  default function Vaildatio(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Username required";
    }
  
    if (!values.password) {
      errors.password = "Password required";
    }
  
    return errors;
  }