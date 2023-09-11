import instance from "./commonapi";

let register = "register";

export const sendOtp = async (phone) => {
  const { data } = await instance.patch(register, { phone });
  return data;
};

export const veriFYOTP = async (otp) => {
  const { data } = await instance.put(register, { otp });

  return data;
};

export const registerPropertyOwner = async (value) => {
  const { data } = await instance.post(register, {
    value,
  });
  return data;
};
