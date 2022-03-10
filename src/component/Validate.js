const Validate = (user) => {
  let errors = {}
  let isValid = true

  if(!user.name){
      isValid = false
      errors.name = "Name is required * "
  }
  if(!user.phone){
      isValid = false
      errors.phone = "Phone number is required * "
  } else if(!/(\+88)?01[3-9]\d{8}$/.test(user.phone)){
      isValid = false
      errors.phone = "Invalid phone number"
  }
  return {errors, isValid};
}

export default Validate